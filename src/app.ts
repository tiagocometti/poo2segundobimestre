import express, { Response } from 'express';
import AlunoRouter from './routes/AlunoRoutes';  // Importe outras rotas conforme necessário
import AvaliadorRouter from './routes/AvaliadorRoutes';
import GroupRouter from './routes/GroupRoutes';

const app = express();
const PORT = 5002;

// Use as rotas
app.use('/api', AlunoRouter);
app.use('/api', AvaliadorRouter);
app.use('/api', GroupRouter);

// Rota padrão para lidar com a raiz
app.get('/', (_, res: Response) => {
    res.send('Bem-vindo ao servidor!');
  });
  

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
