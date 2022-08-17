const mongoose = require('mongoose');

import { USERNAME, PASSWORD } from "./NOSUBIR";

const connect = async() => {
    await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@rockstar-pf.cdbn0ge.mongodb.net/users?retryWrites=true&w=majority`);
}


module.exports = connect;