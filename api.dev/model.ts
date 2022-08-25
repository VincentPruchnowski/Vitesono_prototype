import { DB } from 'sqlite/mod.ts';
import { sqliteStore } from '../lib.deno/sqliteStore.ts';

interface Model {
  db: DB;
}

const db: DB = sqliteStore.create();

export const model: Model = { db };
