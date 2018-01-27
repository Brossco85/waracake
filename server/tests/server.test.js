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
},
{
  _id: new ObjectId(),
  name: "CheeseCake",
  comment: "Delicious Home Made CheeseCake",
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
  it('should not create a cake with invalid data', (done) => {
    request(app)
    .post('/cakes')
    .send({})
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      Cake.find().then((cakesResult) => {
        expect(cakesResult.length).toBe(2);
        done();
      }).catch((err) => done(err));
    })
  })
});

describe('GET/cakes', () => {

  it('Should return a list of all cakes', (done) => {
    request(app)
    .get('/cakes')
    .expect(200)
    .expect((res) => {
      expect(res.body.cakes.length).toBe(2);
    })
    .end(done);
  });
});

describe('GET/cakes/:id', () => {
  it('Should return cake based on the id', (done) => {
    request(app)
    .get(`/cakes/${cakes[0]._id.toHexString()}`)
    .expect(200)
    .expect((res) => {
      expect(res.body.cake.name).toBe(cakes[0].name);
    })
    .end(done);
  })

  it('Should  return 404 if no cake with the id is found', (done) => {
    request(app)
    .get(`/cakes/${new ObjectId().toHexString()}`)
    .expect(404)
    .end(done);
  });

  it('Should return 404 is the cake id passed is invalid', (done) => {
    request(app)
    .get(`/cakes/12345`)
    .expect(404)
    .end(done);
  });
});
