import debug from 'debug';
import express from 'express';
import nconf from './../config';
import controllers from './controllers';

const router = express.Router({ caseSensitive: true });
const log = debug('server:route:log');

// generate all routes
nconf.get('routes:app').forEach((page) => {
  if (page.enable) {
    router.get(page.url, (req, res) => {
      return controllers(req, res, page);
    });
  }
});

// not found
router.use((req, res) => {
  const notfound = nconf.get('routes:system:notfound');
  if (notfound.enable) {
    return res
      .status(notfound.httpcode)
      .render(notfound.id, { id: notfound.id });
  }
  return res
    .status(notfound.httpcode)
    .send('{ "success": false, "payload": {}, "error": { "code": 404, "message": "Resource not found" } }');
});

export default router;
