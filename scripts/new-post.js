const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

rl.question('Enter post title: ', (title) => {
  if (!title) {
    console.error('Post title cannot be empty.');
    rl.close();
    return;
  }

  const slug = slugify(title);
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const fileName = `${slug}.md`;
  const filePath = path.join(__dirname, 'src', 'content', 'posts', fileName);

  const frontmatter = `---
title: ${title}
date: ${date}
description: A brief description of your post.
tags:
  - new-post
  - astro
image: ""
imageAlt: ""
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: ""
draft: true
---

# ${title}

Start writing your post here...
`;

  fs.writeFile(filePath, frontmatter, (err) => {
    if (err) {
      console.error('Error creating post:', err);
    } else {
      console.log(`Post created successfully: ${filePath}`);
      console.log('Remember to set "draft: false" when ready to publish.');
    }
    rl.close();
  });
});
