import fs from 'fs';
import path from 'path';
import nconf from 'nconf';

// get node environment
const env = (process.env.NODE_ENV === 'prod') ? 'prod' : 'dev';

// load all configs
fs.readdirSync(path.join(__dirname, env)).forEach((file) => {
  const name = file.split('.').shift();
  nconf.file(name, path.join(__dirname, env, `${name}.json`));
});

export default nconf;
