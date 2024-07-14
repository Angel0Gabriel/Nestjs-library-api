import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BookController } from './book.controller';
import { bookProvider } from './book.provider';
import { BookService } from './book.service';
import { BookRepository } from './repositories/book.repository';
import { TrimQueryPipe } from 'src/lib/trim-query-params';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [...bookProvider, BookService, BookRepository, TrimQueryPipe],
})
export class BookModule {}
