import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Author } from '../interfaces/author.interface';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { UpdateAuthorDto } from '../dto/update-author.dto';

@Injectable()
export class AuthorRepository {
  constructor(
    @Inject('AUTHOR_MODEL')
    private readonly authorModel: Model<Author>,
  ) {}

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return createdAuthor.save();
  }

  async findAllAuthors(filters?: any): Promise<Author[]> {
    return this.authorModel.find(filters).exec();
  }

  async findAuthorById(id: string): Promise<Author> {
    return this.authorModel.findById(id).exec();
  }

  async updateAuthor(
    id: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    return await this.authorModel
      .findByIdAndUpdate(id, updateAuthorDto, {
        new: true,
      })
      .exec();
  }

  async deleteAuthor(id: string): Promise<Author> {
    return this.authorModel.findByIdAndDelete(id).exec();
  }
}
