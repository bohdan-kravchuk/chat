import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { env } from './env';
import routes from './routes';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const { port, mongoDbUrl } = env;
const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.use(errorHandlerMiddleware);

async function start() {
  try {
    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    mongoose.set('toJSON', {
      virtuals: true,
      transform: (_, converted) => {
        delete converted._id;
        delete converted.__v;
      },
    });
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
