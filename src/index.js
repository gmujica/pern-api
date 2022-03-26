const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3500;

app.use(morgan('dev'));

app.listen(PORT);
console.log(`SERVER IS RUNNIG ON PORT: ${PORT}`);