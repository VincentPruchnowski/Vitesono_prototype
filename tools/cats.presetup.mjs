import fs from 'fs';

const o_raw = JSON.parse(fs.readFileSync('data/categories.json').toString());

const items = [];

_walk(o_raw, 'root');

// id mapping
const cats_items = items.map(function ({ name, father }, index) {
  return { id: index + 1, name, father, father_id: 0 };
});

// father_id mapping
for (const o of cats_items) {
  if (o.father !== 'root') {
    const o_father = cats_items.find((v) => v.name === o.father);
    if (o_father !== undefined) {
      o.father_id = o_father.id;
    }
  }
}

const cats_table_json = cats_items.map(function ({ id, name, father_id }) {
  return { id, father_id, data: { name } };
});

cats_table_json.unshift({
  id: 0,
  father_id: 0,
  data: {
    name: 'root',
  },
});

fs.writeFileSync(
  'data/cats.json',
  JSON.stringify(cats_table_json, undefined, 4)
);

function _walk(o, father) {
  for (const name of Object.keys(o)) {
    items.push({ name: name, father });
    if (o[name] !== null) {
      _walk(o[name], name);
    }
  }
}
