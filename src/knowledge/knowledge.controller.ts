import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GetUser } from 'src/auth/get-user.decorator'
import { User } from 'src/auth/user.entity'
import { CreateKnowledgeDTO } from './dto/create-knowledge.dto'
import { Knowledge } from './knowledge.entity'
import { KnowledgeService } from './knowledge.service'

@Controller('api/knowledge')
@UseGuards(AuthGuard())
export class KnowledgeController {
    constructor(private service: KnowledgeService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    save(
        @Body() dto: CreateKnowledgeDTO,
        @GetUser() user: User
    ): Promise<Knowledge> {
        return this.service.persist(dto, user)
    }

    @Get()
    getAll(
        @GetUser() user: User
    ) {
        return this.service.getAll(user)
    }

    @Get('/:id')
    getById(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User
    ): Promise<Knowledge> {
        return this.service.getById(id, user)
    }

}
