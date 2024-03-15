// chatbox.js

function setupEventListeners() {
  const messageInput = document.getElementById("input");
  messageInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  const sendButton = document.getElementById("send");
  sendButton.onclick = sendMessage;
};

async function sendMessage() {
  const messageInput = document.getElementById("input");

  const message = messageInput.value;

  if (message.trim() !== "") {
    const chatContainer = document.getElementById("chat");
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    // User message
    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;


    const messengerID = document.createElement("p");
    messengerID.classList.add("messenger-id");
    messengerID.textContent = "User:";

    messageContainer.appendChild(messengerID);
    messageContainer.appendChild(userMessage);

    // Ship it to frontend
    chatContainer.appendChild(messageContainer);

    messageInput.value = "";

    //const botMessage = document.createElement("div");
    //botMessage.classList.add("received-message");
    //botMessage.textContent = "I am a bot";
    //chatContainer.appendChild(botMessage);
    //return

    const url = 'http://localhost:5005/webhooks/rest/webhook';//'https://dashboards.create.aau.dk/webhooks/rest/webhook';
    //const url = 'https://dashboards.create.aau.dk/webhooks/rest/webhook';
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
      const responseDataArray = responseData.messages || []


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
  }
}

setupEventListeners();


async function getURL() {
  const url = 'https://dashboards.create.aau.dk/webhooks/rest/webhook/status';

  const response = await fetch(url);
  if (response.status === 200) {
    return "http://localhost:5005"
  } else {
    return "https://dashboards.create.aau.dk:5005"
  }
}
