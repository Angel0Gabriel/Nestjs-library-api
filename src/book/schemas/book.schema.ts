import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  title: String,
  description: String,
  date_published: Date,
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
});
