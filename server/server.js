require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Cake} = require('./models/cake');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/cakes', (req, res) => {
  let cake = new Cake({
    name: req.body.name,
    comment: req.body.comment,
    imageUrl: req.body.imageUrl,
    yumFactor: req.body.yumFactor
  });
  cake.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/cakes', (req, res) => {
  Cake.find().then((cakes) => {
    res.status(200).send({cakes});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};