import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';

import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';
import { UpdateBookDto } from './dto/update-book.dto';
import { TrimQueryPipe } from 'src/lib/trim-query-params';
import { RolesGuard } from 'src/auth/guards/permissions.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { ApiTags } from '@nestjs/swagger';
import { QueryBookDto } from './dto/query.dto';

@Controller('books')
@ApiTags('CRUD books')
@UseGuards(RolesGuard)
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @UsePipes(TrimQueryPipe)
  async findAllBooks(@Query() query?: QueryBookDto): Promise<Book[]> {
    return this.bookService.findAllBooks(query);
  }

  @Get(':id')
  async findBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findBookById(id);
  }

  @Post()
  @Roles('admin')
  async createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(createBookDto);
  }

  @Patch(':id')
  @Roles('admin')
  async updateBook(
    @Param('id') id: string,
    @Body() body: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id')
  @Roles('admin')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteBook(id);
  }
}
