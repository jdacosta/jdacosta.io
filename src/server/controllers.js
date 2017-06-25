import path from 'path';
import nconf from './../config';

export default function (req, res, page) {
  const uri = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  try {
    const controller = require(path.join(__dirname, 'controllers', page.id));
    controller.init(req, res, page, uri);
  } catch (err) {
    return res
      .status(page.httpcode)
      .render(page.id, {
        id: page.id,
        type: page.type,
        uri: uri,
        title: nconf.get(`pages:${page.id}:title`),
        description: nconf.get(`pages:${page.id}:description`),
      });
  }
};
