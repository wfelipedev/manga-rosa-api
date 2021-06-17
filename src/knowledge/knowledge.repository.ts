import { User } from 'src/auth/user.entity'
import { EntityRepository, Repository } from 'typeorm'
import { CreateKnowledgeDTO } from './dto/create-knowledge.dto'
import { Knowledge } from './knowledge.entity'

@EntityRepository(Knowledge)
export class KnowledgeRepository extends Repository<Knowledge>{

   async persist(dto: CreateKnowledgeDTO, user: User): Promise<Knowledge> {
        const { title } = dto
        const knowledge = new Knowledge()
        knowledge.title = title
        knowledge.userId = user.id
        await knowledge.save()
        delete knowledge.user
        return knowledge
    }

     async getAll(user: User): Promise<Knowledge[]> {
        const query = this.createQueryBuilder('knowledge')

        query.where('knowledge.userId = :userId', { userId: user.id })
        
        const knowledge = query.getMany()
        return knowledge
    }

}