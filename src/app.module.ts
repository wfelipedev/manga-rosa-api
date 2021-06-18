import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './config/typeorm.config'
import { AuthModule } from './auth/auth.module'
import { KnowledgeModule } from './knowledge/knowledge.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
		AuthModule,
		KnowledgeModule,
		PersonModule,
  ],
})
export class AppModule {}
