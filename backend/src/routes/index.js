import userRoutes from './userRoutes';
import initialRoutes from './initialRoutes';

const routes = (app) => {
  app.use('/api/users', userRoutes);
  app.use('/api/initial', initialRoutes);
};

export default routes;
