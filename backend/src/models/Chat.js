import { Schema, model } from 'mongoose';

const chatSchema = new Schema(
  {
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

export const Chat = model('Chat', chatSchema);
