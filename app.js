const http = require('http');

function rqListener(req, res) {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Greetings from Node JS!</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="userData" /><button type="submit">SEND</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Bear Grills</li>');
    res.write('<li>Steve Irwin</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString().split('=')[1];
      console.log(parsedBody);

      res.write('<html>');
      res.write('<body>');
      res.write('<h1>User data was received: ' + parsedBody + '</h1>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  }
}

const server = http.createServer(rqListener);

server.listen(3000);