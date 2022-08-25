import { Router } from 'oak/mod.ts';

import { POST_cats } from './controllers/cats.ctrl.ts';
import { GET_brands } from './controllers/brands.ctrl.ts';
import { POST_refs } from './controllers/refs.ctrl.ts';
import { POST_auth } from './controllers/auth.ctrl.ts';

export const router = new Router()
  .get('/api/brands', GET_brands)
  .post('/api/cats', POST_cats)
  .post('/api/refs', POST_refs)
  .post('/api/auth', POST_auth);
