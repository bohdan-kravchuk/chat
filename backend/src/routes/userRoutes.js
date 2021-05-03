import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { createUser, getUser } from '../services/userService';

const router = Router();

router
  .post(
    '/',
    run((req) => createUser(req.body))
  )
  .get(
    '/:userName',
    run((req) => getUser(req.params))
  );

export default router;
