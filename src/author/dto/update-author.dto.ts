import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly biography: string;
  @ApiProperty()
  readonly birth_date: Date;
}
