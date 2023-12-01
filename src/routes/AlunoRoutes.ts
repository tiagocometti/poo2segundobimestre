import { Router, Request, Response } from 'express';
import AlunoController from '../controllers/AlunoController';
import { Prisma } from '@prisma/client';
import AlunoService from '../services/AlunoService';



const AlunoRouter = Router();

AlunoRouter.get('/alunos', async (req: Request, res: Response) => {
  try {
    const alunos = await AlunoController.listAlunos(req, res);
    res.json({ status: 'ok', alunos });
  } catch (error) {
    console.error('Erro ao listar alunos:', error);
    // Você pode enviar uma resposta de erro aqui se desejar, mas não é necessário.
  }
});


AlunoRouter.post('/aluno', async (req: Request, res: Response) => {
  try {
    const aluno = await AlunoController.createAluno(req, res);
    res.json({ status: 'ok', aluno });
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

AlunoRouter.put('/aluno/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dados: Prisma.AlunoUpdateInput = req.body;

    const alunoAtualizado = await AlunoService.updateAluno(id, dados);
    res.status(200).json({
      status: 'ok',
      alunoAtualizado: alunoAtualizado
    });
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

AlunoRouter.delete('/aluno/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const alunoDeletado = await AlunoService.deleteAluno(id);
    res.status(200).json({
      status: 'ok',
      alunoDeletado: alunoDeletado
    });
  } catch (error) {
    console.error('Erro ao excluir aluno:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});




export default AlunoRouter;
