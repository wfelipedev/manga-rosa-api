import { IsString, Matches, MinLength } from 'class-validator'

export class SignInDTO {
    @IsString()
    @MinLength(3)
    username: string
    @IsString()
    @MinLength(6)
    password: string
}