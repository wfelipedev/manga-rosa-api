import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { AuthDTO } from './dto/auth.dto'
import { SignInDTO } from './dto/signin.dto'
import { JwtPayload } from './jwt-payload.interface'
import { User } from './user.entity'
import { UserReposiroty } from './user.repository'

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserReposiroty)
		private repository: UserReposiroty,
		private jwtService: JwtService
	) {}

	async singUp(dto: AuthDTO): Promise<User> {
		return this.repository.signUp(dto)
	}

	async signIn(dto: SignInDTO): Promise<{ accessToken: string }> {
		const username = await this.repository.validatePassword(dto)
		if (!username) throw new UnauthorizedException('invalid credentials')
		const payload: JwtPayload = { username }
		const accessToken = await this.jwtService.sign(payload)
		return { accessToken }
	}

	async getAll(): Promise<User[]> {
        return this.repository.getAll()
    }

	async getById(id: number, user: User): Promise<User> {
        const userFound = await this.repository.findOne({
            where: { id: id }
        })
        if (!userFound)
            throw new NotFoundException(`User with ID ${user.id} not found`)
        return userFound
    }

	async getByUser(user: User): Promise<User> {
        const userFound = await this.repository.findOne({
            where: { id: user.id }
        })
        if (!userFound)
            throw new NotFoundException(`User with ID ${user.id} not found`)
        return userFound
    }

	async update(user: User): Promise<User> {
        const userFound = await this.getByUser(user)
        userFound.role = 'admin'
        await userFound.save()
        return userFound
    }
}
