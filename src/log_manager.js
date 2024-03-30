const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000; // Choose your desired port number

// Enable CORS middleware
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Define a route to handle logging messages
app.post('/log_manager', (req, res) => {
  const { message, type } = req.body;

  if (!message || !type) {
    return res.status(400).json({ error: "Message and type are required." });
  }

  if (type === 'user' && message.toLowerCase() === 'hi') {
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    currentLogFile = path.join(__dirname, '..', 'Logs', `user_${timestamp}.txt`);
    console.log('New log file created:', currentLogFile);

    currentLogFolder = path.join(__dirname, '..', 'Logs', `log_${timestamp}`);
    fs.mkdirSync(currentLogFolder);
    console.log('New log folder created:', currentLogFolder);
  }

  if (!currentLogFile) {
    return res.status(400).json({ error: "No log file created yet." });
  }

  if (!currentLogFolder) {
    return res.status(400).json({ error: "No log folder created yet." });
  }

  if (type === 'data') {
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const argsSource = path.join(__dirname, '..', 'data', 'args.json');
    const dataSource = path.join(__dirname, '..', 'data', 'data.json');

    const argsDestination = path.join(currentLogFolder, `args_${timestamp}.json`);
    const dataDestination = path.join(currentLogFolder, `data_${timestamp}.json`);

    fs.copyFileSync(argsSource, argsDestination);
    fs.copyFileSync(dataSource, dataDestination);

    console.log('Args and data files saved to:', currentLogFolder);
    return res.status(200).json({ message: 'Args and data files saved successfully.' });
  } else {
    const logMessage = `[${new Date().toISOString()}] ${type.toUpperCase()}: ${message}\n`;

    fs.appendFile(currentLogFile, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
        return res.status(500).json({ error: 'Error writing to log file.' });
      } else {
        console.log('Message logged to:', currentLogFile);
        return res.status(200).json({ message: 'Message logged successfully.' });
      }
    });
  }

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
