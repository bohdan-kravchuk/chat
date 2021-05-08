import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { createUser, getUser, updateUser } from '../services/userService';

const router = Router();

router
  .post(
    '/',
    run((req) => createUser(req.body))
  )
  .put(
    '/',
    run((req) => updateUser(req.body.id, req.body))
  )
  .get(
    '/:userName',
    run((req) => getUser(req.params))
  );

export default router;
