import e from 'cors';

// chatbox.js
const xy = require('../data/hobbit.json')
let yAxis = 'Age'
let xAxis = 'Gender';
let plotType = 'line';
let trendLineChecked = false;
let errorBarChecked = false;
let nationalValuesChecked = false;
let selectedHospitals = [];
let minX = 0;
let maxX = 0;
let minY = 0;
let maxY = 0;

async function setupEventListeners() {
  const messageInput = document.getElementById("input");
  messageInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  const sendButton = document.getElementById("send");
  sendButton.onclick = sendMessage;
  const menuButton = document.getElementById("pop-up-button");
  menuButton.onclick = openMenu;
  const thumbnails = document.getElementsByClassName("gallery-image");
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
      showImage(thumbnails[i]);
    });
  }

  const yAxisSelect = document.getElementById("y-axis-select");
  yAxisSelect.addEventListener("change", (event) => {
    yAxis = event.target.value
    sendMessageToRasa('y-axis: ' + yAxis)
  });
  const xAxisSelect = document.getElementById("x-axis-select");
  xAxisSelect.addEventListener("change", (event) => {
    xAxis = event.target.value
    sendMessageToRasa('x-axis: ' + xAxis)
  });
  const plotTypeSelect = document.getElementById("plot-type-select");
  plotTypeSelect.addEventListener("change", (event) => {
    plotType = event.target.value
    sendMessageToRasa('plot-type: ' + plotType)
  });
  const trendLine = document.getElementById("trend-line");
  trendLine.addEventListener("change", (event) => {
    if (trendLine.checked === true) {
      trendLineChecked = true;
    } else {
      trendLineChecked = false;
    }
    sendMessageToRasa('trend-line: ' + trendLineChecked)
  });
  const errorBar = document.getElementById("error-bar");
  errorBar.addEventListener("change", (event) => {
    if (errorBar.checked === true) {
      errorBarChecked = true;
    } else {
      errorBarChecked = false;
    }
    sendMessageToRasa('error-bar: ' + errorBarChecked)
  });
  const nationalValues = document.getElementById("national-values");
  nationalValues.addEventListener("change", (event) => {
    if (nationalValues.checked === true) {
      nationalValuesChecked = true;
    } else {
      nationalValuesChecked = false;
    }
    sendMessageToRasa('national-values: ' + nationalValuesChecked)
  });

  const hospitalComparison = document.getElementById("hospital-select");
  hospitalComparison.addEventListener("change", (event) => {
    selectedHospitals = Array.from(hospitalComparison.options)
      .filter(option => option.selected)
      .map(option => option.value);
    if (selectedHospitals.includes('None')) {
      console.log("None selected")
      selectedHospitals = ['None']
    } else {
      console.log(selectedHospitals)
    }
    sendMessageToRasa('compare with hospitals: ' + selectedHospitals)
  });

  const submitButton = document.getElementById("submit-y");
  submitButton.addEventListener("click", () => {
    minY = document.getElementById("min-y").value;
    maxY = document.getElementById("max-y").value;
    if (minY == '' || maxY == '') {
      console.log('Fill it in first dumbass!')
      return
    }
    sendMessageToRasa('min y: ' + minY + ' max y: ' + maxY)
  });

  const submitXButton = document.getElementById("submit-x");
  submitXButton.addEventListener("click", () => {
    minX = document.getElementById("min-x").value;
    maxX = document.getElementById("max-x").value;
    if (minX == '' || maxX == '') {
      console.log('Fill it in first dumbass!')
      return
    }
    sendMessageToRasa('min x: ' + minX + ' max x: ' + maxX)
  });
};

export function showImage(thumbnail) {
  //print out 'this works' to the console
  console.log(thumbnail);
  // create overlay div with thumbnail
  const overlay = document.getElementById("overlay");
  overlay.src = thumbnail.src;
  overlay.classList.remove("hidden");

  const chart = document.getElementById("viz");
  chart.classList.add("hidden");

  const selected = document.getElementsByClassName("thumbnail-selected");
  console.log(selected);

  if (selected.length != 0) {
    console.log("removing class" + selected);
    selected[0].classList.remove("thumbnail-selected");
    thumbnail.classList.add("thumbnail-selected");
  } else {
    thumbnail.classList.add("thumbnail-selected");
  }

}

function openMenu() {
  const menu = document.getElementById("pop-up");
  const menuButton = document.getElementById("pop-up-button");
  if (menu.classList.contains("pop-up-expanded")) {
    menu.classList.remove("pop-up-expanded");
    menuButton.classList.remove("rotate");
  } else {
    menu.classList.add("pop-up-expanded");
    menuButton.classList.add("rotate");
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  // Your code here
  // create an array of all images
  const chartLibrary = [
    "./public/chart1.png",
    "./public/chart2.png",
    "./public/chart1.png",
    "./public/chart2.png",
    "./public/chart1.png",
    "./public/chart2.png",
  ];

  const galleryContainer = document.getElementById("gallery-container");

  //loop through the image array
  for (let i = 0; i < chartLibrary.length; i++) {
    //create a new image element
    let img = new Image();
    img = document.createElement("img");
    img.classList.add("gallery-image");
    //set the source of the image element
    img.src = chartLibrary[i];
    galleryContainer.appendChild(img);
  }

  await setupEventListeners();

});



async function sendMessage() {
  const messageInput = document.getElementById("input");

  const message = messageInput.value;

  if (message.trim() !== "") {
    const chatContainer = document.getElementById("chat");
    const userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("message-container");
    const chatbotMessageContainer = document.createElement("div");
    chatbotMessageContainer.classList.add("ca-message-container");

    // User message
    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;

    const messengerID = document.createElement("p");
    messengerID.classList.add("messenger-id");
    messengerID.textContent = "User:";

    userMessageContainer.appendChild(messengerID);
    userMessageContainer.appendChild(userMessage);

    // Ship it to frontend
    chatContainer.appendChild(userMessageContainer);

    messageInput.value = "";

    // Send message to Rasa
    sendMessageToRasa(message, chatContainer);

    // Bot message
    //   const botMessage = document.createElement("p");
    //   botMessage.classList.add("received-message");
    //   botMessage.textContent = "I am a bot";

    //   const botMessengerID = document.createElement("p");
    //   botMessengerID.classList.add("chatbot-id");
    //   botMessengerID.textContent = "Chatbot:";

    //   chatbotMessageContainer.appendChild(botMessengerID);
    //   chatbotMessageContainer.appendChild(botMessage);

    //   chatContainer.appendChild(chatbotMessageContainer);
    //   return
  }
}

async function sendMessageToRasa(message, chatContainer) {
  //const url = 'http://localhost:5005/webhooks/rest/webhook';//'https://dashboards.create.aau.dk/webhooks/rest/webhook';
  const url = 'https://dashboards.create.aau.dk/webhooks/rest/webhook';
  const data = {
    message: message
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    // const responseDataArray = responseData.messages || []
    console.log(response)
    console.log(responseData)

    responseData.forEach(message => {
      console.log(message.text);
      const botMessage = document.createElement("div");
      botMessage.classList.add("received-message");
      botMessage.textContent = message.text;
      chatContainer.appendChild(botMessage);
    })
  } catch (error) {
    console.error('Error:', error);
    // Handle the error as needed, e.g., show an error message to the user
  }
  import("./viz").then(function (viz) {
    viz.createLineChart()
  });

  //hide the img #overlay and remove class hidden from #viz
  const overlay = document.getElementById("overlay");
  overlay.classList.add("hidden");
  const chart = document.getElementById("viz");
  chart.classList.remove("hidden");
}



// async function getURL() {
//   const url = 'https://dashboards.create.aau.dk/webhooks/rest/webhook/status';

//   const response = await fetch(url);
//   if (response.status === 200) {
//     return "http://localhost:5005"
//   } else {
//     return "https://dashboards.create.aau.dk:5005"
//   }
// }


const generateXAndYAxisDropdowns = () => {
  const xDropdown = document.getElementById("x-axis-select");
  const yDropdown = document.getElementById("y-axis-select");
  Object.keys(xy).forEach((key) => {
    const xoption = document.createElement("option");
    xoption.value = key;
    xoption.text = key;
    const yoption = document.createElement("option");
    yoption.value = key;
    yoption.text = key;
    xDropdown.appendChild(xoption);
    yDropdown.appendChild(yoption);
  });

}
generateXAndYAxisDropdowns()