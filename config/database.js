const mongoose =  require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
    // Connect to MongoDB
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(error => {
        console.log("Error connecting to MongoDB: ", error);
        process.exit(1);
    });
};