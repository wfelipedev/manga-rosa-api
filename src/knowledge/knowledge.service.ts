import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/auth/user.entity'
import { CreateKnowledgeDTO } from './dto/create-knowledge.dto'
import { Knowledge } from './knowledge.entity'
import { KnowledgeRepository } from './knowledge.repository'

@Injectable()
export class KnowledgeService {
    constructor(
        @InjectRepository(KnowledgeRepository)
        private repository: KnowledgeRepository
    ) { }

    async persist(dto: CreateKnowledgeDTO, user: User): Promise<Knowledge> {
        return this.repository.persist(dto, user)
    }

    async getById(id: number, user: User): Promise<Knowledge> {
        const knowledge = await this.repository.findOne({
            where: { id, userId: user.id }
        })
        if (!knowledge)
            throw new NotFoundException(`Knowledge with ID ${id} not found`)
        return knowledge
    }

    async getAll(user: User): Promise<Knowledge[]> {
        return this.repository.getAll(user)
    }

}