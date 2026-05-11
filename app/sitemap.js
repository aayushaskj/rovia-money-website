import { companyList } from '@/data/companies';
import { stories } from '@/data/stories';

const BASE_URL = 'https://rovia.money';

// Bump this date whenever content is significantly updated
const CONTENT_UPDATED = new Date('2025-05-11');

export default function sitemap() {
  const companyRoutes = companyList.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const storyRoutes = [
    { url: `${BASE_URL}/stories`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    ...stories.map((s) => ({
      url: `${BASE_URL}/stories/${s.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.75,
    })),
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...companyRoutes,
    ...storyRoutes,
  ];
}
