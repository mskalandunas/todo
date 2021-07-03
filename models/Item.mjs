import mongoose from 'mongoose';

import { MediaSchema } from './media.mjs';
import { SubtasksSchema } from './subtasks.mjs';

const ItemSchema = new mongoose.Schema({
  _create_date: {
    type: Date,
    default: Date.now,
    required: true
  },
  body: String,
  heading: {
    type: String,
    required: true
  },
  media: {
    type: MediaSchema
  },
  subtasks: {
    type: SubtasksSchema
  }
});

export const ItemModel = mongoose.model('Item', ItemSchema);