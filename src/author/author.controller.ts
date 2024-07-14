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

import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './interfaces/author.interface';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { TrimQueryPipe } from 'src/lib/trim-query-params';
import { RolesGuard } from 'src/auth/guards/permissions.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { ApiTags } from '@nestjs/swagger';
import { QueryAuthorDto } from './dto/query.dto';

@Controller('authors')
@ApiTags('CRUD authors')
@UseGuards(RolesGuard)
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  @UsePipes(TrimQueryPipe)
  async findAllAuthors(@Query() query?: QueryAuthorDto): Promise<Author[]> {
    return this.authorService.findAllAuthors(query);
  }

  @Get(':id')
  async findAuthorById(@Param('id') id: string): Promise<Author> {
    return this.authorService.findAuthorById(id);
  }

  @Post()
  @Roles('admin')
  async createAuthor(
    @Body() createAuthorDto: CreateAuthorDto,
  ): Promise<Author> {
    return this.authorService.createAuthor(createAuthorDto);
  }

  @Patch(':id')
  @Roles('admin')
  async updateAuthor(
    @Param('id') id: string,
    @Body() body: UpdateAuthorDto,
  ): Promise<Author> {
    return this.authorService.updateAuthor(id, body);
  }

  @Delete(':id')
  @Roles('admin')
  async deleteAuthor(@Param('id') id: string): Promise<Author> {
    return this.authorService.deleteAuthor(id);
  }
}
