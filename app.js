const http = require('http');

http.createServer((req, res) => {
  let data = '';
  req.on('data', chunk => data += chunk);
  req.once('end', () => {
    try {
      const body = JSON.parse(data);
      if (body.req.path == '/updates') {
        res.end('ok');
        return;
      }
      if (body.req.path.match(/recs/)) {
        const resbody = JSON.parse(body.res.body);
        for (const result of resbody.results) {
          result.date = new Date(),
          console.log(JSON.stringify(result));
        }
        res.end('ok');
        return;
      }
      if (body.req.path.match(/^\/(like|pass)/)) {
        const resbody = JSON.parse(body.res.body);
        const [action, id] = body.req.path.match(/^\/(like|pass)\/([0-9a-f]+)/).slice(1);
        console.log(JSON.stringify({
          date: new Date(),
          action,
          id,
          match: resbody.match,
        }));
        res.end('ok');
        return;
      }
    } catch (e) {
      console.error(e.stack);
    }
    res.end('ok')
  });
}).listen(1337);
