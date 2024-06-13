const { connect, connection } = require("mongoose");
require("dotenv").config();

const connectStr = process.env.MONGO_URI;

connect(connectStr);

module.exports = connection;
