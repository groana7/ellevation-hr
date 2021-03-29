const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const port = 4000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Where our routes are mounted
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Serving silly sounds on PORT ${port}`);
});
