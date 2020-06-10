import app from '../../../server';
import request from 'supertest'

describe('HomeController', () => {
  describe('routes', () => {
    it('GET /api', async () => {
      request(app).get('/api')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});