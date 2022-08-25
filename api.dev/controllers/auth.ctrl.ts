const secrets_json = await Deno.readTextFile('data/secrets.json');
const secrets = JSON.parse(secrets_json);

export async function POST_auth({
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

  const { user, password } = await request.body().value;

  const isAllowed =
    secrets.users.findIndex(
      (o: any) => o.user === user && o.secret === password
    ) > -1;

  response.status = isAllowed === true ? 200 : 403;
}
