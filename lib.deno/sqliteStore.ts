import { DB } from 'sqlite/mod.ts';

const db_path_default: string = 'sqlite.db';

export const sqliteStore = {
  create,
  db_path_default,
};

function create(opt = { path: db_path_default }): DB {
  return new DB(opt.path);
}
