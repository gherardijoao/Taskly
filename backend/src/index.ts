import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './database/data-source';
import userRoutes from './routes/user.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar no banco:', err);
  });
