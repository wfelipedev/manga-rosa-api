import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GetUser } from 'src/auth/get-user.decorator'
import { User } from 'src/auth/user.entity'
import { CreatePersonDTO } from './dto/create-person.dto'
import { FilterPeopleDTO } from './dto/filter-people.dto'
import { Person } from './person.entity'
import { PersonService } from './person.service'

@Controller('api/person')
@UseGuards(AuthGuard())
export class PersonController {
    constructor(private service: PersonService) {
    }

    @Post("/")
    @UsePipes(ValidationPipe)
    save(
        @Body() dto: CreatePersonDTO,
        @GetUser() user: User
    ): Promise<Person> {
        return this.service.persist(dto, user)
    }

    @Get('/')
    getAll(@Query(ValidationPipe) dto: FilterPeopleDTO, @GetUser() user: User) {
        return this.service.getAll(dto, user)
    }

    @Get('/:id')
    getById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
    ): Promise<Person> {
        return this.service.getById(id, user)
    } 

    @Patch('/:id/update/:status')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Param('status', ParseIntPipe) status: number,
        @GetUser() user: User
    ): Promise<Person> {
        return this.service.update(id, status, user)
    }

}
