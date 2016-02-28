import http from 'http';
import url from 'url';
import parseTime from './parsers/parseTime';
import parseUnix from './parsers/parseUnix';

function handleResponse(req, res) {
  let response;
  const obj = url.parse(req.url, true);
  if (obj.pathname === '/api/parsetime')
    response = parseTime(obj);
  if (obj.pathname === '/api/unixtime')
    response = parseUnix(obj);

  if (response) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(response));
    res.end(console.log('Parsing data'));
  } else {
    res.writeHead(400);
    res.end();
  }

}

http.createServer(handleResponse).listen(3000, '127.0.0.1');

console.log('Server running on localhost:3000');
