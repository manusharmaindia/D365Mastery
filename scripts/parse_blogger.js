import fs from 'fs';

const atomPath = 'C:\\Users\\user\\Downloads\\takeout-20260915T112940Z-1-001\\Takeout\\Blogger\\Blogs\\Dynamics 365 F&amp_O Mastery\\feed.atom';
const content = fs.readFileSync(atomPath, 'utf8');

const rawEntries = content.split('<entry>');
console.log(`Total raw entries: ${rawEntries.length - 1}`);

const entries = [];

for (let i = 1; i < rawEntries.length; i++) {
  const block = rawEntries[i].split('</entry>')[0];

  const typeMatch = /<blogger:type>(.*?)<\/blogger:type>/.exec(block);
  const statusMatch = /<blogger:status>(.*?)<\/blogger:status>/.exec(block);
  const titleMatch = /<title(?:[^>]*)>([\s\S]*?)<\/title>/.exec(block);
  const publishedMatch = /<published>(.*?)<\/published>/.exec(block);
  const updatedMatch = /<updated>(.*?)<\/updated>/.exec(block);

  const type = typeMatch ? typeMatch[1] : 'UNKNOWN';
  const status = statusMatch ? statusMatch[1] : 'UNKNOWN';
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim() : 'No Title';
  const published = publishedMatch ? publishedMatch[1] : '';

  // Extract categories/tags
  const tagMatches = [...block.matchAll(/<category[^>]*term=["'](.*?)["']/g)].map(m => m[1]);

  entries.push({
    index: i,
    type,
    status,
    title,
    published,
    tags: tagMatches,
    blockLength: block.length
  });
}

console.log("\nALL ENTRIES LIST:");
entries.forEach(e => {
  console.log(`\n[#${e.index}] TYPE: ${e.type} | STATUS: ${e.status}`);
  console.log(`    TITLE: "${e.title}"`);
  console.log(`    DATE: ${e.published}`);
  console.log(`    TAGS: ${e.tags.join(', ')}`);
});
