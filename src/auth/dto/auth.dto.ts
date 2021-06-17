import { IsString, Matches, MinLength, IsNotEmpty } from 'class-validator'
import { Knowledge } from 'src/knowledge/knowledge.entity'

export class AuthDTO {
    @IsString()
    @MinLength(3)
    username: string
    @IsString()
    @MinLength(6)
    @Matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      { message: 'password too weak' }
    )
    password: string

    @IsNotEmpty()
    @IsString()
    name: string
    @IsString()
    email: string
    @IsString()
    cpf: string
    @IsString()
    phone_number: string
}