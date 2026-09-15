import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('D365 Mastery Principal Architect'),
    category: z.enum([
      'Process Manufacturing',
      'Production Control',
      'Cash and Bank',
      'Credit and Collection',
      'GST & Localization',
      'General Ledger',
      'D365 F&O',
      'X++ Development',
      'Data Management',
      'Integrations',
      'Azure Integration',
      'Performance Optimization',
      'Production Support',
      'ERP Best Practices',
      'Power Platform'
    ]),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('7 min read'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
