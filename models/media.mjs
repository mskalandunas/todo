import mongoose from 'mongoose';

export const MediaSchema = new mongoose.Schema({
  external_url: {
    type: String
  },
  image_url: {
    type: String
  }
});