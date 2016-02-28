import expect from 'expect';
import http from 'http';

describe('server', () => {
  it('should return 400', done => {
    http.get('http://127.0.0.1:3000', res => {
      expect(res.statusCode).toEqual(400);
      done();
    });
  });

  it('should return 200', done => {
    http.get('http://127.0.0.1:3000/api/parsetime?iso=2016-02-28T20:13:30.492Z', res => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});
