// MONGODB 
const mongoose = require('mongoose');
const { dateTimeNowFormated } = require('../utils');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/oj-server';

const connectDB = () => {
    mongoose.connect(dbUrl)
        .then(() => {
            console.log("Database Connected !!!");
        })
        .catch(error => {
            console.error("Oh no MONGOOSE Error !!!");
            console.error(error, dateTimeNowFormated());
        });
}

module.exports = {
    connectDB
};