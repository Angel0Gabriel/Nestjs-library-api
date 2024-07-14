import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: string;
  readonly description: string;
  readonly date_published: Date;
  readonly author_id: string;
}
