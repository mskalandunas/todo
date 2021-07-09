import fs from 'fs';
import path from 'path';

export const baseViewController = (req, res) => {
  fs.readFile(path.resolve('dist/index.html'), 'utf8', (err, data) => {
      res.send(err ? 'Something went wrong.' : data);
  }); 
};
