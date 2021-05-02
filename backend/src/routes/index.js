import userRoutes from './userRoutes';

const routes = (app) => {
  app.use('/api/users', userRoutes);
};

export default routes;
