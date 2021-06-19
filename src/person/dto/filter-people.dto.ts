import { IsNotEmpty, IsOptional } from 'class-validator'

export class FilterPeopleDTO {
    @IsOptional()
    @IsNotEmpty()
    search: string
} 