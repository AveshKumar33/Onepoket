const express = require('express');
const fs = require('fs');
//create a express app object
const app = express();

function countWordsInFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      const wordCount = countWords(data);
      callback(null, wordCount);
    }
  });
}

function countWords(text) {
  const words = text.split(/\s+/);
  const filteredWords = words.filter(word => word !== '');
  return filteredWords.length;
}


//--------------routing start from here -----------
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/countword', (req, res) => {
  const filename = 'data.txt';
  countWordsInFile(filename, (err, wordCount) => {
    if (err) {
      res.status(500).send('Error reading the file.');
    } else {
      res.send(`Total word count: ${wordCount}`);
    }
  });
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
