import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publish Date' }),
        author: fields.text({ label: 'Author', defaultValue: 'CA Manu Sharma' }),
        category: fields.text({ label: 'Category' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value }),
        readingTime: fields.text({ label: 'Reading Time (e.g., "5 min read")' }),
        featured: fields.checkbox({ label: 'Featured on Homepage', defaultValue: false }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/blogger',
              publicPath: '/images/blogger',
            },
          },
        }),
      },
    }),
  },
});
