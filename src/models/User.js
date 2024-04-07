import mongoose from "mongoose";
import { hash } from "../utils/hash.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", function (next) {
  if (this.password) {
    this.password = hash(this.password);
  }
  next();
});

// password validation

userSchema.methods.validatePassword = function (data) {
  return bcrypt.compare(data, this.password);
};
// collection ismi  // sema
const Users = mongoose.model("users", userSchema);

export default Users;
