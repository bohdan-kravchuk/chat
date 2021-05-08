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
      {
        avatarURI:
          'https://i.pinimg.com/originals/1f/2d/43/1f2d4301367a7a3b68ea127e49c61fb7.jpg',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        isOnline: true,
        isBot: true,
        userName: 'Echo bot',
        _id: '60969be4358453366831ce9e',
      },
      {
        avatarURI:
          'https://i.pinimg.com/originals/e3/63/d4/e363d47b171fe791769090c4d8cacd6d.png',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        isOnline: true,
        isBot: true,
        userName: 'Reverse bot',
        _id: '60969e2dc6f9514948177294',
      },
      {
        avatarURI:
          'https://i.pinimg.com/originals/7a/f6/7e/7af67e2ab815b04324b83b1c30053d19.jpg',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        isOnline: true,
        isBot: true,
        userName: 'Spam bot',
        _id: '60969f573abd8b4a20944dee',
      },
      {
        avatarURI:
          'https://img1.goodfon.com/wallpaper/nbig/1/12/alienware-logotip-chernyy-fon.jpg',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        isOnline: true,
        isBot: true,
        userName: 'Ignore bot',
        _id: '6096a01eba5c6851ccbc87f3',
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
      {
        messages: [],
        users: ['60969be4358453366831ce9e', '608f03dac2729924d40f1aef'],
      },
      {
        messages: [],
        users: ['60969be4358453366831ce9e', '608fbe2a5fc61f3f14103762'],
      },
      {
        messages: [],
        users: ['60969be4358453366831ce9e', '608fbf8f5fc61f3f14103764'],
      },
      {
        messages: [],
        users: ['60969e2dc6f9514948177294', '608f03dac2729924d40f1aef'],
      },
      {
        messages: [],
        users: ['60969e2dc6f9514948177294', '608fbe2a5fc61f3f14103762'],
      },
      {
        messages: [],
        users: ['60969e2dc6f9514948177294', '608fbf8f5fc61f3f14103764'],
      },
      {
        messages: [],
        users: ['60969e2dc6f9514948177294', '60969be4358453366831ce9e'],
      },
      {
        messages: [],
        users: ['60969f573abd8b4a20944dee', '608f03dac2729924d40f1aef'],
      },
      {
        messages: [],
        users: ['60969f573abd8b4a20944dee', '608fbe2a5fc61f3f14103762'],
      },
      {
        messages: [],
        users: ['60969f573abd8b4a20944dee', '608fbf8f5fc61f3f14103764'],
      },
      {
        messages: [],
        users: ['60969f573abd8b4a20944dee', '60969be4358453366831ce9e'],
      },
      {
        messages: [],
        users: ['60969f573abd8b4a20944dee', '60969e2dc6f9514948177294'],
      },
      {
        messages: [],
        users: ['6096a01eba5c6851ccbc87f3', '608f03dac2729924d40f1aef'],
      },
      {
        messages: [],
        users: ['6096a01eba5c6851ccbc87f3', '608fbe2a5fc61f3f14103762'],
      },
      {
        messages: [],
        users: ['6096a01eba5c6851ccbc87f3', '608fbf8f5fc61f3f14103764'],
      },
      {
        messages: [],
        users: ['6096a01eba5c6851ccbc87f3', '60969be4358453366831ce9e'],
      },
      {
        messages: [],
        users: ['6096a01eba5c6851ccbc87f3', '60969e2dc6f9514948177294'],
      },
      {
        messages: [],
        users: ['6096a01eba5c6851ccbc87f3', '60969f573abd8b4a20944dee'],
      },
    ],
  },
];
