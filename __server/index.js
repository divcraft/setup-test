const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('./mongoose');
const testRouter = require('./routes/test');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('__client/build'));
  app.get('/ ', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../__client/build/index.html'));
  });
}

app.use('/api', testRouter);

app.listen(PORT, () =>
  console.log(`Server is listening at http://localhost:${PORT} ...`)
);
