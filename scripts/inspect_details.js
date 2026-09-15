import fs from 'fs';

const atomPath = 'C:\\Users\\user\\Downloads\\takeout-20260915T112940Z-1-001\\Takeout\\Blogger\\Blogs\\Dynamics 365 F&amp_O Mastery\\feed.atom';
const content = fs.readFileSync(atomPath, 'utf8');

const rawEntries = content.split('<entry>');

for (let i = 1; i < rawEntries.length; i++) {
  const block = rawEntries[i].split('</entry>')[0];

  const typeMatch = /<blogger:type>(.*?)<\/blogger:type>/.exec(block);
  const statusMatch = /<blogger:status>(.*?)<\/blogger:status>/.exec(block);
  const titleMatch = /<title(?:[^>]*)>([\s\S]*?)<\/title>/.exec(block);
  const contentMatch = /<content type='html'>([\s\S]*?)<\/content>/.exec(block);
  const publishedMatch = /<published>(.*?)<\/published>/.exec(block);

  const type = typeMatch ? typeMatch[1] : '';
  const status = statusMatch ? statusMatch[1] : '';
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim() : '';
  const html = contentMatch ? contentMatch[1] : '';
  const published = publishedMatch ? publishedMatch[1] : '';

  if (type === 'PAGE') {
    console.log(`\n=================== PAGE: ${title} ===================`);
    console.log(html.substring(0, 1000));
  } else if (type === 'POST') {
    console.log(`\n------------------- POST [#${i}]: ${title} (${status}) -------------------`);
    console.log(`Date: ${published} | Length: ${html.length}`);
    console.log(`Snippet: ${html.substring(0, 300).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()}`);
  }
}
