const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://snehahande175_db_user:sneha123@cluster0.lnx0ryd.mongodb.net/?appName=Cluster0');

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database connected successfully...');
});

db.on('error',(error)=>{
    console.log('Database connection failed...', error);
});

module.exports = db;