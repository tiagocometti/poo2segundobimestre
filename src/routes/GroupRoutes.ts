import { Router, Request, Response } from 'express';
import GroupController from '../controllers/GroupController';

const GroupRouter = Router();

GroupRouter.get('/groups', async (req: Request, res: Response) => {
  try {
    const groups = await GroupController.listGroups(req, res);
    res.json({ status: 'ok', groups });
  } catch (error) {
    console.error('Erro ao listar groups:', error);
    
  }
});

GroupRouter.post('/group', async (req: Request, res: Response) => {
  try {
    const group = await GroupController.createGroup(req, res);
    res.json({ status: 'ok', group });
  } catch (error) {
    console.error('Erro ao criar group:', error);
    
  }
});

GroupRouter.put('/group/:id', async (req: Request, res: Response) => {
  try {
    const group = await GroupController.updateGroup(req, res);
    res.json({ status: 'ok', message: 'Group atualizado com sucesso',group });
  } catch (error) {
    console.error('Erro ao atualizar group:', error);
    
  }
});

GroupRouter.delete('/group/:id', async (req: Request, res: Response) => {
  try {
    const group = await GroupController.deleteGroup(req, res);
    res.json({ status: 'ok', message: 'Group excluído com sucesso', group });
  } catch (error) {
    console.error('Erro ao excluir group:', error);
    
  }
});

export default GroupRouter;