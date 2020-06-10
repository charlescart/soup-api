import app from '../../../server';
import request from 'supertest'

describe('SoupController', () => {
  describe('Sopa de letras irregular y multiples palabras a buscar', () => {
    it('POST /api/soup', done => {
      const searchWords = ["oiE", "ixE", "Ix", "i", "O", "awds", "e4", "", "oi", "eX"];
      const soup = [
        ["o", "I", "E"],
        ["I", "i", "X", "4"],
        ["E", "X", "E"],
        ["E", "X"],
        ["E"],
        [""]
      ];

      request(app).post('/api/soup')
        .send({ soup, searchWords })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          // TODO: hacer un snapshot
          done();
        });
    });
  });
});