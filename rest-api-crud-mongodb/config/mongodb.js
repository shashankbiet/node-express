const mongoose = require('mongoose');
require('dotenv').config();
let dbUrl;

switch (process.env.ENVIRONMENT) {
    case 'dev':
        dbUrl = process.env.DEV_MONGO_URL;
        break;

    case 'test':
        dbUrl = process.env.TEST_MONGO_URL;
        break;
}
module.exports = () => {
    mongoose.connect(dbUrl,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}