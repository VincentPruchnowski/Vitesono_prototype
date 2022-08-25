import { DB } from 'sqlite/mod.ts';
export const brands = { inject };

async function inject(db: DB) {
  const brands_json = await Deno.readTextFile('data/brands.json');

  let i = 0;
  for (const name of JSON.parse(brands_json)) {
    db.query('INSERT INTO brands (id,data) VALUES (?,?)', [
      i,
      JSON.stringify({ name }),
    ]);
    i++;
  }
}
