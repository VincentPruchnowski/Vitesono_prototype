import { model as m } from '../model.ts';

export function GET_brands({ response }: { response: any }) {
  const rows = m.db.query('SELECT * from brands');
  response.body = rows.map(function ([id, data_json]: any) {
    return [id, JSON.parse(data_json)];
  });
}
