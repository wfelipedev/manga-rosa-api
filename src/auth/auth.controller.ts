import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  UseGuards,
  ValidationPipe,
  ParseIntPipe,
  Param
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signin.dto';
import { AuthDTO } from './dto/auth.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) dto: AuthDTO): Promise<User> {
    return this.service.singUp(dto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) dto: SignInDTO,
  ): Promise<{ accessToken: string }> {
    return this.service.signIn(dto);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/user')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  }

  @Get("/all") 
  @UseGuards(AuthGuard())
  getAll() {
      return this.service.getAll()
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  getById(
    @Param('id', ParseIntPipe) id: number,  
    @GetUser() user: User
  ): Promise<User> {
      return this.service.getById(id, user)
  }

  @Get('/get')
  @UseGuards(AuthGuard())
  getByUser(
      @GetUser() user: User
  ): Promise<User> {
      return this.service.getByUser(user)
  }

  @Patch('/update')
  @UseGuards(AuthGuard())
  update(
      @GetUser() user: User
  ): Promise<User> {
      return this.service.update(user)
  }
}
