// Create web server
// 1. npm init -y
// 2. npm install express

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 3. node comments.js
// 4. Open browser and enter localhost:3000

// 5. npm install nodemon --save-dev
// 6. Add start script in package.json
// "start": "nodemon comments.js"
// 7. npm start
// 8. Make changes in comments.js and save
// 9. Server restarts automatically