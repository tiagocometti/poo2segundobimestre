import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import GroupService from '../services/GroupService';

class GroupController {
    async createGroup(req: Request, res: Response) {
        const dados: Prisma.GroupCreateInput = req.body;

        try {
            const newGroup = await GroupService.createGroup(dados);
            res.status(200).json({
                status: 'ok',
                newGroup: newGroup
            });
        } catch (error) {
            console.error(error);
           
        }
    }

    async listGroups(_: Request, res: Response) {
        try {
            const groups = await GroupService.listGroups();
    
            res.status(200).json({
                status: 'ok',
                groups: groups
            });
        } catch (error) {
            console.error(error);
            
        }
    }
    
    async updateGroup(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.GroupUpdateInput = req.body;

        try {
            const groupUpdated = await GroupService.updateGroup(id, dados);
            res.status(200).json({
                status: 'ok',
                groupUpdated: groupUpdated
            });
        } catch (error) {
            console.error(error);
            
        }
    }

    async deleteGroup(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const groupDeleted = await GroupService.deleteGroup(id);
            res.status(200).json({
                status: 'ok',
                groupDeleted: groupDeleted
            });
        } catch (error) {
            console.error(error);
            
        }
    }
}

export default new GroupController();
