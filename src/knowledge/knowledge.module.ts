import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { KnowledgeController } from './knowledge.controller';
import { KnowledgeService } from './knowledge.service';
import { KnowledgeRepository } from './knowledge.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KnowledgeRepository]), AuthModule],
  controllers: [KnowledgeController],
  providers: [KnowledgeService]
})
export class KnowledgeModule {}
