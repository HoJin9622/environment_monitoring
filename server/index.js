const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const dashBoardRouter = require('./routes/dashboard');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', dashBoardRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
