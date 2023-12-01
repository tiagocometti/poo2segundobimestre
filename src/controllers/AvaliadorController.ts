import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import AvaliadorService from '../services/AvaliadorService';

class AvaliadorController {
    async createAvaliador(req: Request, res: Response) {
        const dados: Prisma.AvaliadorCreateInput = req.body;

        try {
            const newAvaliador = await AvaliadorService.createAvaliador(dados);
            res.status(200).json({
                status: 'ok',
                newAvaliador: newAvaliador
            });
            return; // Adicionando o return aqui
        } catch (error) {
            console.error(error);
            
        }
    }

    async listAvaliadores(_: Request, res: Response) {
        try {
            const avaliadores = await AvaliadorService.listAvaliadores();
    
            res.status(200).json({
                status: 'ok',
                avaliadores: avaliadores
            });
            return; // Adicionando o return aqui
        } catch (error) {
            console.error(error);
            
        }
    }

    // ... Restante do código ...

}

export default new AvaliadorController();
