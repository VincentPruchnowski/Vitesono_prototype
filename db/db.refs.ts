import { DB } from 'sqlite/mod.ts';
export const refs = { inject };

async function inject(db: DB) {
  const refs_json = await Deno.readTextFile('data/refs.json');

  for (const { id, desc, title } of JSON.parse(refs_json)) {
    db.query('INSERT INTO refs (id,data) VALUES (?,?)', [
      id,
      JSON.stringify({ desc, title, img: `media/refs/img/ref_${id}.jpg` }),
    ]);
  }
}
// db.query ('UPDATE refs (id,brand_fk,cat_fk) SET (id:brand_fk,id:cat_fk)')
// UPDATE refs SET brand_fk = '1' WHERE refsid = 1;