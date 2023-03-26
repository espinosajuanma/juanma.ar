import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";

let sourceDir = './src';
if (process.env.BRANCH === 'link') {
  sourceDir = './link';
}

if (! process.env.BRANCH) {
  try {
    fs.mkdirSync('./dist')
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
  let content = fs.readFileSync('./config/_redirects_main', 'utf-8');
  fs.writeFileSync('./dist/_redirects', content, 'utf-8');
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  srcDir: sourceDir,
  markdown: {
    gfm: true
  },
  integrations: [mdx({
    gfm: true,
  }), sitemap()]
});