const express = require('express');
const morgan = require('morgan');
// Modules
const taskRoutes = require('./routes/tasks.routes');

const app = express();
const PORT = 3500;

app.use(morgan('dev'));
app.use(taskRoutes);

app.listen(PORT);
console.log(`SERVER IS RUNNIG ON PORT: ${PORT}`);