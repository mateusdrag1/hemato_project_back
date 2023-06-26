import express from 'express';
import cors from 'cors';

import routes from './app/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
