import { IsNotEmpty, MinLength } from 'class-validator'

export class CreateKnowledgeDTO {
    @IsNotEmpty()
    @MinLength(3)
    title: string
}