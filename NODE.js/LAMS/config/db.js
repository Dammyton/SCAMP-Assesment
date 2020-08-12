const mongoose = require("mongoose");

// Connection string - MONGOURI.
const MONGOURI = "mongodb://dammy:test1234@ds163758.mlab.com:63758/lams";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;


