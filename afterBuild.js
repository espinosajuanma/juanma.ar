import fs from 'node:fs';

if (process.env.BRANCH === 'main') {
  console.log('Making [_redirects] file');
  fs.copyFileSync('./config/_redirects_main', './dist/_redirects');
}