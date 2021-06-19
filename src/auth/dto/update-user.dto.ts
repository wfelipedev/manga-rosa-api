import { IsString, Matches, MinLength, IsNotEmpty } from 'class-validator'
import { Knowledge } from 'src/knowledge/knowledge.entity'

export class UpdateUserDTO {
    @IsString()
    role: string
}