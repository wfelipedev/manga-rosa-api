import { IsString, Matches, MinLength, IsNotEmpty } from 'class-validator'

export class CreatePersonDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string
    @IsString()
    @IsNotEmpty()
    email: string
    @IsNotEmpty()
    @IsString()
    cpf: string
    @IsString()
    phone_number: string
}