import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRouter from './routes/users.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ ok: true, message: 'API is running' });
});

app.use('/users', usersRouter);

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`API ready on http://localhost:${port}`);
});
