import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    avatarURI: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: '',
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    isBot: {
      type: Boolean,
      default: false,
    },
    chats: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const User = model('User', userSchema);
