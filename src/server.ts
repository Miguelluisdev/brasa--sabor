import * as jsonServer from 'json-server';
import * as cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('./src/db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
