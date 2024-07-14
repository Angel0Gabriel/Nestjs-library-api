import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryBookDto {
  @ApiPropertyOptional()
  readonly title: string;
  @ApiPropertyOptional()
  readonly description: string;
  @ApiPropertyOptional()
  readonly date_published: Date;
  @ApiPropertyOptional()
  readonly author_id: string;
}
