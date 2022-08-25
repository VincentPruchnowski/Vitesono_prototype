import fs from 'fs';

const files_d = 'data/refs_raw';

const cats = [];

for (const f of fs.readdirSync(files_d).sort()) {
  const cats_chunk = JSON.parse(
    fs.readFileSync(files_d + '/' + f)
  ).facets.categories.terms.buckets.map((o) => o['key']);
  cats.push(...cats_chunk);
}

fs.writeFileSync(
  'data/cats.json',
  JSON.stringify(['__UNKNOWN__', ...new Set(cats)], 0, 2)
);
