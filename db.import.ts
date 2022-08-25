import { DB } from 'sqlite/mod.ts';

const dbSpec_json = await Deno.readTextFile('db/db.spec.json');
const dbSpec = JSON.parse(dbSpec_json);

import { sqliteStore } from './lib.deno/sqliteStore.ts';

import { brands } from './db/db.brands.ts';
import { cats } from './db/db.cats.ts';
import { refs } from './db/db.refs.ts';

await Deno.remove(sqliteStore.db_path_default);

const db: DB = sqliteStore.create();

// schemas
drop_tables();
create_tables();

// data
inject();

async function inject() {
  await brands.inject(db);
  await cats.inject(db);
  await refs.inject(db);
}

function drop_tables() {
  for (const table_name of dbSpec.tables) {
    db.query(`DROP TABLE IF EXISTS ${table_name}`);
  }
}

function create_tables() {
  for (const t of dbSpec.tables) {
    db.query(`CREATE TABLE IF NOT EXISTS ${t.name} (${t.colums.join(',')})`);
  }
}
