import { Connection } from 'mongoose';
import { AuthorSchema } from './schemas/author.schema';

export const authorProvider = [
  {
    provide: 'AUTHOR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Author', AuthorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
