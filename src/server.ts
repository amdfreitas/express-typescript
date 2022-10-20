import express from 'express';
import routerConfig from './router/consfigrouter';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routerConfig);

export default app;
