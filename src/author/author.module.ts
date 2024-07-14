import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthorController } from './author.controller';
import { authorProvider } from './author.provider';
import { AuthorService } from './author.service';
import { AuthorRepository } from './repositories/author.repository';
import { TrimQueryPipe } from 'src/lib/trim-query-params';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [
    ...authorProvider,
    AuthorService,
    AuthorRepository,
    TrimQueryPipe,
  ],
})
export class AuthorModule {}
