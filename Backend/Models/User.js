const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },

  profile_picture: {
    type: Object,
    default: {
      public_id: null,
      url: "https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg",
    },
  },

  role: {
    type: Number,
    default: 0,
  },

  phone_number: {
    type: String,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;