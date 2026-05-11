import { readdirSync } from 'fs';
import { join } from 'path';
import { companyList } from '@/data/companies';

const BASE_URL = 'https://rovia.money';

function getCreativeImages() {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  try {
    const dir = join(process.cwd(), 'public', 'creatives');
    const files = readdirSync(dir);
    return files
      .filter((f) => validExtensions.some((ext) => f.toLowerCase().endsWith(ext)))
      .map((f) => ({
        url: `${BASE_URL}/creatives/${f}`,
        title: f
          .replace(/\.[^.]+$/, '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      }));
  } catch {
    return [];
  }
}

export default function sitemap() {
  const images = getCreativeImages();

  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      // Google Image Sitemap extension fields
      images: images.map((img) => ({
        url: img.url,
        title: img.title,
        caption: `Rovia — ${img.title} | India-first RSU management`,
      })),
    },
  ];

  const companyRoutes = companyList.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...companyRoutes];
}
