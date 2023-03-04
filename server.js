const express = require('express');
const cookieParser = require('cookie-parser');
const next = require('next');
const { getPath } = require('./utils/utils');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = express();
const handle = app.getRequestHandler();
const port = process.env.PORT || 7001;

app
  .prepare()
  .then(() => {
    server.use(cookieParser());

    server.get('/health', (req, res) => {
      res.status(200);
      res.end('ok');
    });

    server.get('*', async (req, res) => {
      const parsedUrl = getPath(req.url);

      await handle(req, res, parsedUrl);
    });
    server.listen(parseInt(port, 10), (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
