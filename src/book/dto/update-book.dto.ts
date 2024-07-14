import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly date_published: Date;
  @ApiProperty()
  readonly author_id: string;
}
