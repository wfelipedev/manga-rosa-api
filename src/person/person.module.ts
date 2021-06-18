import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonRepository } from './person.repository'

@Module({
  imports: [TypeOrmModule.forFeature([PersonRepository]), AuthModule],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
