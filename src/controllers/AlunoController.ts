import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import AlunoService from '../services/AlunoService';

class AlunoController {
    async createAluno(req: Request, res: Response) {
        const dados: Prisma.AlunoCreateInput = req.body;

        try {
            const newAluno = await AlunoService.createAluno(dados);
            res.status(200).json({
                status: 'ok',
                newAluno: newAluno
            });
        } catch (error) {
            console.error(error);
            
        }
    }

    async listAlunos(_: Request, res: Response) {
        try {
            const alunos = await AlunoService.listAlunos();
    
            res.status(200).json({
                status: 'ok',
                alunos: alunos
            });
        } catch (error) {
            console.error(error);
            
        }
    }
    

    async updateAluno(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.AlunoUpdateInput = req.body;

        try {
            const alunoAtualizado = await AlunoService.updateAluno(id, dados);
            res.status(200).json({
                status: 'ok',
                alunoAtualizado: alunoAtualizado
            });
        } catch (error) {
            console.error(error);
            
        }
    }

    async deleteAluno(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const alunoDeletado = await AlunoService.deleteAluno(id);
            res.status(200).json({
                status: 'ok',
                alunoDeletado: alunoDeletado
            });
        } catch (error) {
            console.error(error);
            
        }
    }
}

export default new AlunoController();
