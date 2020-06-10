import app from '../../../server';
import request from 'supertest'

describe('HomeController', () => {
  describe('routes', () => {
    it('GET /api', done => {

      request(app).get('/api')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body.message).toMatch(/running/);
          done();
        });
    });
  });
});