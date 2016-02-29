import http from 'http';
import url from 'url';
import parseTime from './parsers/parseTime';
import parseUnix from './parsers/parseUnix';

const port = process.env.PORT || 3000;

function handleResponse(req, res) {
  let response;
  const obj = url.parse(req.url, true);
  if (obj.pathname === '/api/parsetime')
    response = parseTime(obj);
  if (obj.pathname === '/api/unixtime')
    response = parseUnix(obj);
  if (obj.pathname === '/')
    response =
      `This is an API timestamp service.
      Call the API using /api/parsetime or /api/unixtime.
      For example: /api/parsetime?iso=2013-08-10T12:10:15.474Z.
      For parsetime you will receive:
        {
          "hour":12,
          "minute":10,
          "second":15
        }
      For unixtime you will receive:
        {
          "unix":1376136615474
        }
      For an invalid ISO 8601 format you will receive:
        {
          error: 'Invalid ISO-format'
        }
      For any questions contact Adam Recvlohe <adam.recvlohe@gmail.com>`;

  if (response) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(response));
    res.end(console.log('Parsing data'));
  } else {
    res.writeHead(400);
    res.end();
  }

}

http.createServer(handleResponse).listen(port);

console.log('Server running on localhost:' + port);
