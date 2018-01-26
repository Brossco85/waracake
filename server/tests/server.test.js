const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');

const {app} = require('./../server');
const {Cake} = require('./../models/cake');

const cakes = [{
  _id: new ObjectId(),
  name: "Chocolate Cake",
  comment: "Delicious Sainsbury's Chocolate Cake",
  imageUrl: "www.imager.com/cakeplaceholder",
  yumFactor: 5
}];

beforeEach((done) => {
  Cake.remove({}).then(() => {
    return Cake.insertMany(cakes);
  }).then(() => done());
});

describe('POST/cakes', () => {

  it('Should create a new cake', (done) => {
    request(app)
    .post('/cakes')
    .send(cakes[0])
    .expect(200)
    .expect((res) => {
      expect(res.body.name).toBe(cakes[0].name);
      expect(res.body.comment).toBe(cakes[0].comment);
      expect(res.body.imageUrl).toBe(cakes[0].imageUrl);
      expect(res.body.yumFactor).toBe(cakes[0].yumFactor);
    })
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      Cake.find(cakes[0]).then((cakesResult) => {
       expect(cakesResult.length).toBe(1);
       expect(cakesResult[0].name).toBe(cakes[0].name);
       done();
     }).catch((err) => done(err));
    });
  })
});