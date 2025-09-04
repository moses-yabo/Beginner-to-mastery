const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config({ quiet: true });
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require('./config/db.js');
connectDB();
app.use(express.static(path.join(__dirname, 'public')));
//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);
app.get('/', (req, res) => {
  res.json({ key: 'HELLO world' });
});
const ideaRouter = require('./routes/ideas');
app.use('/api/ideas', ideaRouter);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
