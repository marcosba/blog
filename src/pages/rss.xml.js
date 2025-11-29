import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../src/config';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>${siteConfig.language}</language>`,
  });
}