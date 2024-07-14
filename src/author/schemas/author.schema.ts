import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  biography: String,
  birth_date: Date,
});
