import seeder from 'mongoose-seed';
import { env } from '../env.js';

seeder.connect(env.mongoDbUrl, function () {
  seeder.loadModels([
    'src/models/Chat.js',
    'src/models/Message.js',
    'src/models/User.js',
  ]);

  seeder.clearModels(['Chat', 'Message', 'User'], function () {
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});

const data = [
  {
    model: 'User',
    documents: [
      {
        _id: '608f03dac2729924d40f1aef',
        avatarURI: 'https://i.imgur.com/OCXEh4z.png',
        bio: 'Matrix (1999)',
        isOnline: false,
        isBot: false,
        userName: 'Neo',
      },
      {
        _id: '608fbe2a5fc61f3f14103762',
        avatarURI: 'https://i.imgur.com/eAHn3r3.jpg',
        bio: 'Matrix (1999)',
        isOnline: false,
        isBot: false,
        userName: 'Trinity',
      },
      {
        _id: '608fbf8f5fc61f3f14103764',
        avatarURI: 'https://i.imgur.com/9Ywcr0d.jpg',
        bio: 'Matrix (1999)',
        isOnline: false,
        isBot: false,
        userName: 'Morpheus',
      },
    ],
  },
  {
    model: 'Chat',
    documents: [
      {
        users: ['608fbe2a5fc61f3f14103762', '608f03dac2729924d40f1aef'],
        messages: [],
      },
      {
        messages: [],
        users: ['608fbf8f5fc61f3f14103764', '608f03dac2729924d40f1aef'],
      },
      {
        messages: [],
        users: ['608fbf8f5fc61f3f14103764', '608fbe2a5fc61f3f14103762'],
      },
    ],
  },
];
