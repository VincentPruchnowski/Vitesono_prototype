import { model as m } from '../model.ts';

// export function POST_cats({ response }: { response: any }) {
//   const rows = m.db.query('SELECT * from cats');
//   response.body = rows.map(function ([id, father_id, data]: any) {
//     return [id, father_id, JSON.parse(data)];
//   });
// }

// const cats_json = await Deno.readTextFile('data/cats.json');
// const cats = JSON.parse(cats_json);

// export function GET_cats({ response }: { response: any }) {
//   response.body = cats;
// }

// curl -d '{"topOnly":true}' -H "Content-Type: application/json" -X POST http://localhost/api/brands

export async function POST_cats({
  request,
  response,
}: {
  request: any;
  response: any;
}) {
  if (request.hasBody === false) {
    response.status = 403;
    return;
  }

  const { topOnly } = await request.body().value;

  const q =
    topOnly === false
      ? 'SELECT * FROM cats WHERE id != 0'
      : 'SELECT * FROM cats WHERE id != 0 AND father_id == 0';

  const rows_all = m.db.query(q).map(function ([id, father_id, data]: any) {
    return { id, father_id, data };
  });

  response.body = rows_all.map(function (o: any) {
    return {
      id: o.id,
      father_id: o.brand_k,
      data: JSON.parse(o.data),
    };
  });
}
