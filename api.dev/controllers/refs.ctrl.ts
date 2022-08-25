import { model as m } from '../model.ts';

export async function POST_refs({
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

  const { searchFilter, limit } = await request.body().value;

  const rows_all = m.db
    .query('SELECT * from refs')
    .map(function ([id, brand_k, cat_fk, data]: any) {
      return { id, brand_k, cat_fk, data };
    });

  const rows_filtered =
    searchFilter === ''
      ? rows_all
      : rows_all.filter(function (o: any) {
          return o.data.includes(searchFilter);
        });

  response.body = rows_filtered.slice(0, limit).map(function (o: any) {
    return {
      id: o.id,
      brand_k: o.brand_k,
      cat_fk: o.cat_fk,
      data: JSON.parse(o.data),
    };
  });
}
