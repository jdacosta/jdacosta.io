import path from 'path';
import express from 'express';
import routes from './routes.js';
import nconf from './../config';

const HOST = process.env.HOST || nconf.get('server:host');
const PORT = process.env.PORT || nconf.get('server:port');
const app = express();

// configure express
app
  .set('view engine', 'jade')
  .set('views', path.join(__dirname, 'views/pages'))
  .use(express.static(path.join(__dirname, '/../client/assets')))
  .use('/', routes);

// create server
const server = app.listen(PORT, HOST, () => {
  const { address, port } = server.address();
  console.log(`Server listening at http://${address}:${port}`);
});

export default app;
