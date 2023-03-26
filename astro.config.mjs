import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";

let sourceDir = './src';
if (process.env.BRANCH === 'link') {
  sourceDir = './link';
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