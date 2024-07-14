import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryAuthorDto {
  @ApiPropertyOptional()
  readonly name: string;
  @ApiPropertyOptional()
  readonly biography: string;
  @ApiPropertyOptional()
  readonly birth_date: Date;
}
