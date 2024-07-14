import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { BookRepository } from './repositories/book.repository';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookRepository.createBook(createBookDto);
  }

  async findAllBooks(query?: any): Promise<Book[]> {
    const filters: any = {};

    if (query.title) {
      const titlePattern = new RegExp(`^${query.title}`);
      filters.title = { $regex: titlePattern, $options: 'i' };
    }

    if (query.description) {
      const descriptionPattern = new RegExp(`^${query.description}`);
      filters.description = { $regex: descriptionPattern, $options: 'i' };
    }

    if (query.date_published) {
      filters.date_published = new Date(query.date_published);
    }

    if (query.author_id) {
      const author_idPattern = new RegExp(`^${query.author_id}`);
      filters.author_id = { $regex: author_idPattern, $options: 'i' };
    }

    return this.bookRepository.findAllBooks(filters);
  }

  async findBookById(id: string): Promise<Book> {
    return this.bookRepository.findBookById(id);
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookRepository.updateBook(id, updateBookDto);
  }

  async deleteBook(id: string): Promise<Book> {
    return this.bookRepository.deleteBook(id);
  }
}
