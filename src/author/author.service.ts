import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDto } from './dto/create-author.dto';
import { AuthorRepository } from './repositories/author.repository';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.createAuthor(createAuthorDto);
  }

  async findAllAuthors(query?: any): Promise<Author[]> {
    const filters: any = {};

    if (query.name) {
      const namePattern = new RegExp(`^${query.name}`);
      filters.name = { $regex: namePattern, $options: 'i' };
    }

    if (query.biography) {
      const biographyPattern = new RegExp(`^${query.biography}`);
      filters.biography = { $regex: biographyPattern, $options: 'i' };
    }

    if (query.birth_date) {
      filters.birth_date = new Date(query.birth_date);
    }

    return this.authorRepository.findAllAuthors(filters);
  }

  async findAuthorById(id: string): Promise<Author> {
    return this.authorRepository.findAuthorById(id);
  }

  async updateAuthor(
    id: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    return this.authorRepository.updateAuthor(id, updateAuthorDto);
  }

  async deleteAuthor(id: string): Promise<Author> {
    return this.authorRepository.deleteAuthor(id);
  }
}
