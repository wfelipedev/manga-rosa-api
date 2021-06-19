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
    @MinLength(14)
    cpf: string
    @IsString()
    phone_number: string
}