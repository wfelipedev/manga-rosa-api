import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { SignInDTO } from './dto/signin.dto'
import { AuthDTO } from './dto/auth.dto'
import { GetUser } from './get-user.decorator'
import { User } from './user.entity'

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) dto: AuthDTO): Promise<User> {
    return this.service.singUp(dto)
  }

  @ Post('/signin')
  signIn(
    @Body(ValidationPipe) dto: SignInDTO
  ): Promise<{ accessToken: string }> {
    console.log(dto)
    return this.service.signIn(dto)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/user')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user)
    return {username: user.username}
  }
}
