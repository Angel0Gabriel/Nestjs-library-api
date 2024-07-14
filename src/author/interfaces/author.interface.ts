import { Document } from 'mongoose';

export interface Author extends Document {
  readonly name: string;
  readonly biography: string;
  readonly birth_date: Date;
}
