import { companyList } from '@/data/companies';
import { stories } from '@/data/stories';
import { tools } from '@/data/tools';
import { posts as blogPosts } from '@/data/blog';

const BASE_URL = 'https://rovia.money';

// Bump this date whenever content is significantly updated
const CONTENT_UPDATED = new Date('2026-06-01');

export default function sitemap() {
  const companyRoutes = companyList.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const toolRoutes = [
    { url: `${BASE_URL}/tools`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    ...tools.map((t) => ({
      url: `${BASE_URL}/tools/${t.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  const storyRoutes = [
    { url: `${BASE_URL}/stories`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    ...stories.map((s) => ({
      url: `${BASE_URL}/stories/${s.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.75,
    })),
  ];

  const guideRoutes = companyList.map((slug) => ({
    url: `${BASE_URL}/${slug}/guide`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const blogRoutes = [
    { url: `${BASE_URL}/blog`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    ...blogPosts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updatedDate || p.publishDate || CONTENT_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.85,
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
    ...toolRoutes,
    ...storyRoutes,
    ...guideRoutes,
    ...blogRoutes,
  ];
}
