import { Inject, Injectable } from '@nestjs/common';
import { Book } from '../interfaces/book.interface';
import { Model } from 'mongoose';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BookRepository {
  constructor(
    @Inject('BOOK_MODEL')
    private readonly bookModel: Model<Book>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAllBooks(query?: any): Promise<Book[]> {
    return this.bookModel.find(query).exec();
  }

  async findBookById(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookModel
      .findByIdAndUpdate(id, updateBookDto, { new: true })
      .exec();
  }

  async deleteBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
