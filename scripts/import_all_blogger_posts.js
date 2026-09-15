import fs from 'fs';
import path from 'path';

const atomPath = 'C:\\Users\\user\\Downloads\\takeout-20260915T112940Z-1-001\\Takeout\\Blogger\\Blogs\\Dynamics 365 F&amp_O Mastery\\feed.atom';
const albumsPath = 'C:\\Users\\user\\Downloads\\takeout-20260915T112940Z-1-001\\Takeout\\Blogger\\Albums';
const outputDir = path.resolve('src/content/blog');
const publicImagesDir = path.resolve('public/images/blogger');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Copy local album images if any
if (fs.existsSync(albumsPath)) {
  const copyFolderRecursive = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
        copyFolderRecursive(srcPath, destPath);
      } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(entry.name)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };
  copyFolderRecursive(albumsPath, publicImagesDir);
  console.log('Copied Blogger album images to public/images/blogger/');
}

const content = fs.readFileSync(atomPath, 'utf8');
const rawEntries = content.split('<entry>');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function cleanHtmlContent(rawHtml) {
  let cleaned = decodeEntities(rawHtml);

  // If already double-encoded entities exist
  cleaned = decodeEntities(cleaned);

  // Strip useless inline styles from MS Word or LinkedIn copy-paste
  cleaned = cleaned.replace(/\s*style="[^"]*"/gi, '');
  cleaned = cleaned.replace(/\s*class="[^"]*"/gi, '');
  cleaned = cleaned.replace(/\s*id="ember[^"]*"/gi, '');
  cleaned = cleaned.replace(/\s*data-[a-z0-9-]+="[^"]*"/gi, '');
  cleaned = cleaned.replace(/\s*aria-[a-z0-9-]+="[^"]*"/gi, '');

  // Remove empty spans and divs
  cleaned = cleaned.replace(/<span>(.*?)<\/span>/gi, '$1');
  cleaned = cleaned.replace(/<div>\s*<\/div>/gi, '');
  cleaned = cleaned.replace(/<p>\s*<\/p>/gi, '');
  cleaned = cleaned.replace(/<p>&nbsp;<\/p>/gi, '');

  // Format images nicely
  cleaned = cleaned.replace(/<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi, (match, before, src, after) => {
    return `<img src="${src}" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" />`;
  });

  return cleaned.trim();
}

function categorizePost(title, tags) {
  const lower = (title + ' ' + tags.join(' ')).toLowerCase();

  if (lower.includes('gst') || lower.includes('india') || lower.includes('qr code')) {
    return { category: 'GST & Localization', defaultTags: ['GST', 'India Localization', 'E-Invoicing', 'D365 F&O'] };
  }
  if (lower.includes('production') || lower.includes('posting profile') || lower.includes('wip')) {
    return { category: 'Production Control', defaultTags: ['Production Control', 'Posting Profiles', 'WIP', 'RAF', 'Costing'] };
  }
  if (lower.includes('process manufacturing') || lower.includes('sfg') || lower.includes('formula')) {
    return { category: 'Process Manufacturing', defaultTags: ['Process Manufacturing', 'Formulas', 'Routes', 'SFG', 'Batch Orders'] };
  }
  if (lower.includes('collection') || lower.includes('dunning') || lower.includes('credit and collection')) {
    return { category: 'Credit and Collection', defaultTags: ['Credit and Collection', 'Collection Letters', 'Dunning', 'AR'] };
  }
  if (lower.includes('bank') || lower.includes('mt940') || lower.includes('camt') || lower.includes('reconciliation')) {
    return { category: 'Cash and Bank', defaultTags: ['Cash and Bank', 'Bank Reconciliation', 'MT940', 'CAMT.053', 'ISO 20022'] };
  }
  if (lower.includes('journal') || lower.includes('posting') || lower.includes('ledger')) {
    return { category: 'General Ledger', defaultTags: ['General Ledger', 'Automated Posting', 'Batch Jobs', 'Journals'] };
  }

  return { category: 'D365 F&O', defaultTags: ['D365 F&O', 'Finance and Operations'] };
}

let importedCount = 0;

for (let i = 1; i < rawEntries.length; i++) {
  const block = rawEntries[i].split('</entry>')[0];

  const typeMatch = /<blogger:type>(.*?)<\/blogger:type>/.exec(block);
  const titleMatch = /<title(?:[^>]*)>([\s\S]*?)<\/title>/.exec(block);
  const contentMatch = /<content type='html'>([\s\S]*?)<\/content>/.exec(block);
  const publishedMatch = /<published>(.*?)<\/published>/.exec(block);
  const authorMatch = /<author>\s*<name>(.*?)<\/name>/.exec(block);

  const type = typeMatch ? typeMatch[1] : '';
  const rawTitle = titleMatch ? titleMatch[1].trim() : '';
  const rawHtml = contentMatch ? contentMatch[1] : '';
  const pubDateStr = publishedMatch ? publishedMatch[1] : new Date().toISOString();
  const author = authorMatch ? authorMatch[1].trim() : 'Manu Sharma';

  // Filter: only POST entries with substantive content
  if (type !== 'POST' || rawHtml.length < 100 || !rawTitle) {
    continue;
  }

  const title = decodeEntities(rawTitle);
  const slug = slugify(title);

  // Extract raw tags from entry
  const rawTags = [...block.matchAll(/<category[^>]*term=["'](.*?)["']/g)].map(m => m[1]).filter(t => !t.startsWith('http'));

  const { category, defaultTags } = categorizePost(title, rawTags);
  const allTags = Array.from(new Set([...rawTags, ...defaultTags])).filter(Boolean);

  const cleanedHtml = cleanHtmlContent(rawHtml);

  // Compute clean text for description
  const cleanText = cleanedHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const description = cleanText.substring(0, 155).trim() + '...';

  // Estimate reading time
  const wordCount = cleanText.split(/\s+/).length;
  const readingTime = `${Math.max(4, Math.ceil(wordCount / 220))} min read`;

  // Construct Markdown Frontmatter
  const frontmatter = `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
pubDate: ${pubDateStr.split('T')[0]}
author: ${JSON.stringify(author)}
category: ${JSON.stringify(category)}
tags: ${JSON.stringify(allTags)}
readingTime: ${JSON.stringify(readingTime)}
featured: ${importedCount < 3}
---

${cleanedHtml}
`;

  const filePath = path.join(outputDir, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter, 'utf8');
  console.log(`[Imported #${++importedCount}] "${title}" -> ${slug}.md (${category})`);
}

console.log(`\nSuccessfully imported ${importedCount} authentic D365 FO blog posts from Blogger export!`);
