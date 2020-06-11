import app from '../../../server';
import request from 'supertest'

describe('SoupController', () => {
  describe('Sopa de letras irregular y multiples palabras a buscar', () => {
    it('POST /api/soup', done => {
      const searchWords: string[] = ["oiE", "ixE", "Ix", "i", "O", "awds", "e4", "", "oi", "eX"];
      const soup: string[][] = [
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
          expect(res.body).toMatchSnapshot();
          done();
        });
    });
  });

  describe('matriz 3x3 palabra a buscar ["OIE"]', () => {
    it('POST /api/soup', done => {
      const searchWords: string[] = ["oiE"];
      const soup: string[][] = [
        ["O", "I", "E"],
        ["I", "I", "X"],
        ["E", "X", "E"],
      ];

      request(app).post('/api/soup')
        .send({ soup, searchWords })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).toMatchSnapshot();
          done();
        });
    });
  });

  describe('matriz 1x10 palabra a buscar ["OIE"]', () => {
    it('POST /api/soup', done => {
      const searchWords: string[] = ["oiE"];
      const soup: string[][] = [
        ["E", "I", "O", "I", "E", "I", "O", "E", "I", "O"],
      ];

      request(app).post('/api/soup')
        .send({ soup, searchWords })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).toMatchSnapshot();
          done();
        });
    });
  });

  describe('matriz 5x5 palabra a buscar ["OIE"]', () => {
    it('POST /api/soup', done => {
      const searchWords: string[] = ["oiE"];
      const soup: string[][] = [
        ["E", "A", "E", "A", "E"],
        ["A", "I", "I", "I", "A"],
        ["E", "I", "O", "I", "E"],
        ["A", "I", "I", "I", "A"],
        ["E", "A", "E", "A", "E"],
      ];

      request(app).post('/api/soup')
        .send({ soup, searchWords })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).toMatchSnapshot();
          done();
        });
    });
  });

  describe('matriz 7x2 palabra a buscar ["OIE"]', () => {
    it('POST /api/soup', done => {
      const searchWords: string[] = ["oiE"];
      const soup: string[][] = [
        ["O", "X"],
        ["I", "O"],
        ["E", "X"],
        ["I", "I"],
        ["O", "X"],
        ["I", "E"],
        ["E", "X"],
      ];

      request(app).post('/api/soup')
        .send({ soup, searchWords })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).toMatchSnapshot();
          done();
        });
    });
  });

  describe('matriz 1x1 palabra a buscar ["OIE"]', () => {
    it('POST /api/soup', done => {
      const searchWords: string[] = ["oiE"];
      const soup: string[][] = [["E"],];

      request(app).post('/api/soup')
        .send({ soup, searchWords })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).toMatchSnapshot();
          done();
        });
    });
  });
});