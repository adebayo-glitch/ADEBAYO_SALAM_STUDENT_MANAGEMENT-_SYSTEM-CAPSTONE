const mongoose = require('mongoose');

const connectDB = async () => {
    const dbURI = "mongodb+srv://pillarbasetech:l69a3SHdFAH9IeH8@cluster0.zjuv6.mongodb.net/studentmanagementdb?retryWrites=true&w=majority&appName=Cluster0"
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
    try {
        mongoose.connect(dbURI, clientOptions)
            .then(() => {
                console.log("database connected")
            })
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;