import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './config/typeorm.config'
import { AuthModule } from './auth/auth.module'
import { KnowledgeModule } from './knowledge/knowledge.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
		AuthModule,
		KnowledgeModule,
  ],
})
export class AppModule {}
