import express from 'express';
import bodyParser from 'body-parser';
import * as userService from './services/users';
import { connectAllDb } from './infra/connectionManager';
import * as connectionResolver from './middlewares/connectionResolver';

const PORT = 8080;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({body: 'Hello multi-tenant application.'});
});

app.listen(PORT, () => {
    console.log(`Express server started at port: ${PORT}`);
});

app.use(bodyParser.json());

connectAllDb();

app.use(connectionResolver.resolve);

app.get('/users', userService.getAll);

