import express from 'express';
import cors from 'cors';
import animaisRoutes from './routes/animais';
import animaisPosts from './routes/post';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api/animais', animaisRoutes);
app.use('/api/post', animaisPosts);

app.listen(3001, () => {
  console.log('Servidor externo rodando na porta 3001');
});