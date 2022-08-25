import { DB } from 'sqlite/mod.ts';
export const cats = { inject };

async function inject(db: DB) {
  const cats_json = await Deno.readTextFile('data/cats.json');

  for (const { id, father_id, data } of JSON.parse(cats_json)) {
    db.query('INSERT INTO cats (id,father_id,data) VALUES (?,?,?)', [
      id,
      father_id,
      JSON.stringify(data),
    ]);
  }
}
