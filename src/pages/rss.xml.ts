import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context){ const essays=(await getCollection('essays',({data})=>data.status==='published')).sort((a,b)=>b.data.date.getTime()-a.data.date.getTime()); return rss({title:'The Unfinished Creator',description:'Essays on intelligence, ancient wisdom, and the future of creation.',site:context.site,items:essays.map(e=>({title:e.data.title,description:e.data.description,pubDate:e.data.date,link:`/essays/${e.id}/`}))}); }
