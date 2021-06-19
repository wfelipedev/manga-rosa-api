import { User } from 'src/auth/user.entity'
import { EntityRepository, Repository } from 'typeorm'
import { CreatePersonDTO } from './dto/create-person.dto'
import { FilterPeopleDTO } from './dto/filter-people.dto'
import { Person } from './person.entity'

@EntityRepository(Person)
export class PersonRepository extends Repository<Person>{

   async persist(dto: CreatePersonDTO, user: User): Promise<Person> {
        const { name, email, cpf, phone_number } = dto
        const person = new Person()
        person.name = name
        person.email = email
        person.cpf = cpf
        person.phone_number = phone_number
        person.status = 0
        person.created_at = new Date()
        person.updated_at = new Date()
        person.user_id = user.id
        await person.save()
        return person
    }

    async getPersonByUser(id:number, user: User): Promise<Person> {
        const person = this.findOne({ user_id: id })
        return person
    }

    async getById(id: number): Promise<Person> {
        const person = this.findOne({ id: id })
        return person
    }

    async getAll(dto: FilterPeopleDTO, user: User): Promise<Person[]> {
        const {search} = dto
        const query = this.createQueryBuilder('person')
        if (search)
        query.andWhere('person.name LIKE :search OR person.email LIKE :search OR person.cpf LIKE :search',
            { search: `${search}%` })
        query.orderBy("person.name", "ASC")
        const people = query.getMany()
        return people
    }

}