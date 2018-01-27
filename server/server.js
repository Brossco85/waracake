require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

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

app.get('/cakes/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Cake.findById(id).then((cake) => {
    if (!cake) {
      return res.status(404).send();
    }
    res.send({cake});
  }).catch((err) => {
    res.status(400).send();
  });
});

app.get('/cakes', (req, res) => {
  Cake.find().then((cakes) => {
    res.status(200).send({cakes});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.put('/cakes/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['name', 'comment', 'imageUrl', 'yumFactor' ]);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Cake.findByIdAndUpdate(id, {$set: body}, {new: true}).then((cake) => {
    if(!cake) {
      res.status(404).send();
    }
    res.status(200).send({cake});
  }).catch((err) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};