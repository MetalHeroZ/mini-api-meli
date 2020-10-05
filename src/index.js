import 'dotenv/config';
import express from 'express';
// import { asyncWrapper } from './utls/index';
import { getItemInformation, searchItems } from './services/itemsService';

const app = express();

app.use((req, res, next) => {
	console.log(`${new Date().toString()} ${req.url}`);
	console.log('+++++++++++++++++++++');
	next();
})

app.get('/api/items/:id', getItemInformation)

app.get('/api/items', searchItems)

app.listen(process.env.PORT, () =>
  console.log(`API running on port ${process.env.PORT}!`),
);
