// const mongoose = require("mongoose");
// const { UserSchema } = require("../schemas/UserSchema");

// const UserModel = mongoose.model("user", UserSchema);

// module.exports = { UserModel };
const mongoose = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");

module.exports = mongoose.model("User", UserSchema);