// visualization.js
import { showImage } from './chatbox.js'
// Function to create the line chart
import Chart from "chart.js/auto";
//import data from './data.json'
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


  const labels = data.map(item => item.YQ);
  const values = data.map(item => item.Value);

  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Your hospital',
      data: values,
      borderColor: '#ff4081',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#ff4081',
    }]
  };

  console.log(args.visualization.show_nat_val === true)
  if (args.visualization.show_nat_val === true) {
    const nat_values = data.map(item => item.nat_value);

    chartData.datasets.push({
      label: 'National median',
      data: nat_values,
      borderColor: '#2196f3', // You can set your desired color
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#2196f3', // You can set your desired color
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

  const chart = new Chart(ctx, {
    type: args.visualization.type,
    data: chartData,
    options: {
      scales: {
        x: {
          type: 'category', // Use category scale for YQ values
          position: 'bottom',
          title: {
            display: true,
            text: 'YQ'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Value'
          },
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
  });
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
