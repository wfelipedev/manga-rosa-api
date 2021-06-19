import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/auth/user.entity'
import { CreatePersonDTO } from './dto/create-person.dto'
import { FilterPeopleDTO } from './dto/filter-people.dto'
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

    async getAll(dto: FilterPeopleDTO, user: User): Promise<Person[]> {
        return this.repository.getAll(dto, user)
    }

    async getById(id: number, user: User): Promise<Person> {
        return this.repository.getPersonByUser(id, user)
    }

    async update(id: number, status: number,  user: User): Promise<Person> {
        const person = await this.getById(id, user)
        console.log(person)
        person.status = status
        person.validated_at = new Date()
        await person.save()
        return person
    }
} 