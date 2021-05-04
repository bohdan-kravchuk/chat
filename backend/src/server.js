import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import { env } from './env';
import routes from './routes';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import socketInjector from './middlewares/socketInjectorMiddleware';
import { registerSockets } from './socket';

const { port, mongoDbUrl, clientUrl } = env;
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: clientUrl,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());
app.use(socketInjector(io));

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
    io.on('connection', (socket) => {
      registerSockets(socket);
    });
    httpServer.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
