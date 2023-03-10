const mongoose = require('mongoose');
const settings = require('../settings')

async function connectMongoDb() {
   await mongoose.connect(settings.dbURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Connected to DB success!');
    });
}

module.exports.connectMongoDb = connectMongoDb