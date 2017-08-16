/* esling-dis */

//  Here we make our connections
import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise; // for error of deprecation of promises

mongoose.set('debug', true); // debug mode on  for CRUD

// For testing connection
try {
  mongoose.connect(constants.DB_URL, {
    useMongoClient: true, // mongo asks for this
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useMongoClient: true,
  });
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running!'))
  .on('error', err => {
    throw err;
  });
