import mongoose from 'mongoose';

export  const SubtasksSchema = new mongoose.Schema({
  // meta: {
  //   required: true,
  //   count: {
  //     type: Number,
  //     required: true
  //   }
  // },
  items: {
    type: [String],
    required: true
  }
});