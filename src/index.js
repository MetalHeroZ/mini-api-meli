import 'dotenv/config';
import express from 'express';
import { getItemInformation, searchItems } from './services/itemsService';

const app = express();

app.get('/api/items/:id', getItemInformation)

app.get('/api/items', searchItems)

app.listen(process.env.PORT, () =>
  console.log(`API running on port ${process.env.PORT}!`),
);
