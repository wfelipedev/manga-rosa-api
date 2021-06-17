import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { AuthDTO } from './dto/auth.dto'
import { SignInDTO } from './dto/signin.dto'
import { JwtPayload } from './jwt-payload.interface'
import { User } from './user.entity'
import { UserReposiroty } from './user.reposiroty'

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserReposiroty)
		private reposiroty: UserReposiroty,
		private jwtService: JwtService
	) {}

	async singUp(dto: AuthDTO): Promise<User> {
		return this.reposiroty.signUp(dto)
	}

	async signIn(dto: SignInDTO): Promise<{ accessToken: string }> {
		const username = await this.reposiroty.validatePassword(dto)
		if (!username) throw new UnauthorizedException('invalid credentials')
		const payload: JwtPayload = { username }
		const accessToken = await this.jwtService.sign(payload)
		console.log(accessToken)
		return { accessToken }
	}
}
