import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { initial } from '../services/initialService';

const router = Router();

router.post(
  '/',
  run((req) => initial(req.body))
);

export default router;
