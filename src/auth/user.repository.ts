import { ConflictException } from '@nestjs/common'
import { EntityRepository, Repository } from 'typeorm'
import { AuthDTO } from './dto/auth.dto'
import { SignInDTO } from './dto/signin.dto'
import { User } from './user.entity'
import * as bcrypt from 'bcrypt'

@EntityRepository(User)
export class UserReposiroty extends Repository<User> {

  async signUp(dto: AuthDTO): Promise<User> {
    const { username, password, name, email, cpf, phone_number } = dto
    const user = new User()
    user.name = name
    user.email = email
    user.cpf = cpf
    user.phone_number = phone_number
    user.role = 'employee'
    user.status = 0
    user.username = username
    user.salt = await bcrypt.genSalt()
    user.password = await this.hashPassword(password, user.salt)
    user.created_at = new Date()
    user.updated_at = new Date()
    try {
      await user.save()
      return user
    } catch (e) {
      if (e.code === '23505') //duplicated username - '23505' duplicated error code
        throw new ConflictException('username already exists')
    }
    return null
  }

  async validatePassword(dto: SignInDTO): Promise<string> {
    const { username, password } = dto
    const user = await this.findOne({ username })
    if (user && await user.validatePassword(password))
      return user.username
    else
      return null
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }

  async getAll(): Promise<User[]> {
    const query = this.createQueryBuilder('user')

    query.where('user.role = :role and user.status = :status', { role: 'employee', status: 0 })
    query.orderBy("user.created_at", "DESC")

    const users = query.getMany()
    return users
  }

}