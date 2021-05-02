import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { createUser, getUsers } from '../services/userService';

const router = Router();

router
  .get(
    '/',
    run(() => getUsers())
  )
  .post(
    '/',
    run((req) => createUser(req.body))
  );

export default router;
