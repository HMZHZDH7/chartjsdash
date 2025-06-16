// visualization.js

import { showImage } from './chatbox.js'
// Function to create the line chart
import Chart from "chart.js/auto";
//import data from './data.json'
import Tree from 'react-d3-tree';
// visualization.js
var allChartsThatWeHaveSaved = []

// Function to create the line chart
export async function createLineChart(log) {
  // Extracting YQ and Value from the JSON data

  let data
  let args

  // await fetchData()
  //   .then(fetched_data => {
  //     data = fetched_data.data;
  //     args = fetched_data.args;
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });

  try {
    const fetched_data = await fetchData();
    data = fetched_data.data;
    args = fetched_data.args;
  } catch (error) {
    console.log(error)
  }

  let labels = [];
  let values = [];

  console.log(Array.isArray(data))
  if (Array.isArray(data)) {
    // timeline case
    labels = data.map(item => item.YQ);
    values = data.map(item => item.Value);
  } else if (typeof data === "object") {
    // SHAP case
    labels = Object.keys(data);
    values = Object.values(data);
  } else {
    console.error("Unrecognized data format:", data);
  }


  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Your hospital',
      data: values,
      borderColor: '#3981e0',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#3981e0',
    }]
  };

  console.log(args.visualization.show_nat_val === true && args.visualization.type !== "shap")

  if (args.visualization.show_nat_val === true && args.visualization.type !== "shap") {
    const nat_values = data.map(item => item.nat_value);

    chartData.datasets.push({
      label: 'National median',
      data: nat_values,
      borderColor: '#a1ea36', // You can set your desired color
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#a1ea36', // You can set your desired color
    });
  }

  if (log === true) {
    const logger = 'http://localhost:5000/log_manager'
    //const logger = 'https://dashboards.create.aau.dk/log_manager'

    const data_to_log = {
      message: "rando",
      type: 'data'
    }

    fetch(logger, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_to_log)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to post message.');
        }
        console.log('Message posted successfully.');
      })
      .catch(error => {
        console.error('Error posting message:', error);
      });
  }

  setupXYFiltering(labels, values);

  // Creating a line chart
  const ctx = document.getElementById('viz');
  ctx.width = ctx.clientWidth; // Set canvas width to its client width
  ctx.height = ctx.clientHeight; // Set canvas height to its client height

  let chartStatus = Chart.getChart(ctx)
  if (chartStatus !== undefined) {
    chartStatus.destroy();
  }

  let chartConfig;

  console.log(labels)
  console.log(values)
  console.log("labels")
  console.log(args.visualization.type)
  if (args.visualization.type === 'shap') {

    chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'SHAP value',
          data: values,
          backgroundColor: values.map(val => val >= 0 ? 'rgba(75, 192, 192, 0.7)' : 'rgba(255, 99, 132, 0.7)'),
          borderColor: values.map(val => val >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),

          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            min: -3,
            max: 3,
            grid: {
              drawTicks: false,
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              stepSize: 1, // Interval of 0.5 between ticks (adjust as needed)
              beginAtZero: false, // If you want to make sure it starts at -3 and not at 0
            },
            title: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Feature'
            },
            ticks: {
              autoSkip: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.raw.toFixed(3)}`;
              }
            }
          },
          title: {
            display: true,
            text: 'Contribution to three month mRS'
          }
        },
        animation: {
          onComplete: function () {
            let base = chart.toBase64Image();
            if (!allChartsThatWeHaveSaved.includes(chart)) {
              allChartsThatWeHaveSaved.push(chart);
              saveChartAsPng(base);
            }
          }
        }
      }
    };
  } else if (args.visualization.type === 'tree') {
      const treeData = [
        {
          name: 'age ≤ 65',
          attributes: { feature: 'age', threshold: 65 },
          children: [
            {
              name: 'leaf: 0.12',
              attributes: { value: 0.12 },
            },
            {
              name: 'NIHSS ≤ 8',
              attributes: { feature: 'NIHSS', threshold: 8 },
              children: [
                {
                  name: 'leaf: 0.45',
                  attributes: { value: 0.45 },
                },
                {
                  name: 'leaf: 0.78',
                  attributes: { value: 0.78 },
                },
              ],
            },
          ],
        },
      ];
      return (
        <div style={{width: '100%', height: '500px'}}>
          <Tree
            data={treeData}
            orientation="vertical"
            translate={{x: 300, y: 50}}
            nodeSize={{x: 200, y: 100}}
            styles={{
              nodes: {
                node: {
                  circle: {
                    fill: '#e0f7fa',
                    stroke: '#00796b',
                    strokeWidth: 2,
                  },
                  name: {
                    fontSize: '14px',
                    fill: '#004d40',
                  },
                  attributes: {
                    fontSize: '12px',
                    fill: '#00695c',
                  },
                },
                leafNode: {
                  circle: {
                    fill: '#ffe0b2',
                    stroke: '#e65100',
                    strokeWidth: 2,
                  },
                  name: {
                    fontSize: '14px',
                    fill: '#bf360c',
                  },
                  attributes: {
                    fontSize: '12px',
                    fill: '#e64a19',
                  },
                },
              },
            }}
          />
        </div>
      );
  } else {
    // Timeline chart
    chartConfig = {
      type: args.visualization.type,
      data: chartData,
      options: {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
            title: {display: true, text: 'YQ'}
          },
          y: {
            title: {display: true, text: 'Value'},
            beginAtZero: true
          }
        },
        animation: {
          onComplete: function () {
            let base = chart.toBase64Image();
            for (let i = 0; i < allChartsThatWeHaveSaved.length; i++) {
              if (allChartsThatWeHaveSaved[i] === chart) {
                return;
              }
            }
            allChartsThatWeHaveSaved.push(chart);
            saveChartAsPng(base);
          }
        }
      }
    };
  }
  const chart = new Chart(ctx, chartConfig);
}


async function saveChartAsPng(chart) {
  let img = document.createElement("img");
  img.classList.add("gallery-image");
  img.src = chart;
  img.onclick = () => {
    showImage(img);
  }
  document.getElementById("gallery-container").appendChild(img);
}

async function fetchData(filename) {
  return fetch('http://localhost:4000/data-webhook', {
  //return fetch('https://dashboards.create.aau.dk/data-webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}) // Empty body since no parameters are required
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response body as JSON
    })
    .then(data => {
      return data; // Return the fetched data
    })
    .catch(error => {
      console.error('There was a problem fetching JSON data:', error);
      throw error;
    });
}

const setupXYFiltering = (x, y) => {
  const xMinInput = document.getElementById("min-x");
  const xMaxInput = document.getElementById("max-x");
  const yMinInput = document.getElementById("min-y");
  const yMaxInput = document.getElementById("max-y");
  const submitX = document.getElementById("submit-x");
  const submitY = document.getElementById("submit-y");

  // Check if x and y are numbers, if yes, find the min and max and set the range
  // if its a string with the values male, female then make it a dropdown
  // if it is a string with the values of the YQ then make it a dropdown

  // Check if x and y are numbers
  if (x.some(val => !isNaN(val))) {
    const xMin = Math.min(...x);
    const xMax = Math.max(...x);
    xMinInput.min = xMin;
    xMinInput.max = xMax;
    xMaxInput.max = xMax;
    xMaxInput.min = xMin;
  } else {
    submitX.disabled = true;
    xMinInput.disabled = true;
    xMaxInput.disabled = true;
  }

  if (y.some(val => !isNaN(val))) {
    const yMin = Math.min(...y);
    const yMax = Math.max(...y);
    console.log('hello' + yMin)
    console.log(yMax)
    yMinInput.min = yMin;
    yMinInput.max = yMax;
    yMaxInput.max = yMax;
    yMaxInput.min = yMin;
  } else {
    submitY.disabled = true;
    yMinInput.disabled = true;
    yMaxInput.disabled = true;
  }


}

// Fetch data from data.json and create the chart
//createLineChart(false).then(r => console.log("Chart created"))
