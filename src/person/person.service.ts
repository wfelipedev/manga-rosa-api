import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/auth/user.entity'
import { CreatePersonDTO } from './dto/create-person.dto'
import { Person } from './person.entity'
import { PersonRepository } from './person.repository'

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonRepository)
        private repository: PersonRepository
    ) { }

    async persist(dto: CreatePersonDTO, user: User): Promise<Person> {
        return this.repository.persist(dto, user)
    }

    async getAll(user: User): Promise<Person[]> {
        return this.repository.getAll(user)
    }

    async getById(id: number, user: User): Promise<Person> {
        return this.repository.getPersonByUser(id, user)
    }
} 