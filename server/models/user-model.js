const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Method is Pre (secure the password with the bcriypt) that "save" is function to excute after the saveing the data
userSchema.pre("save", async function (next) {
  // In that "this" you get user all data
  //  console.log("pre method", this);
  const user = this;
  // if password is not Hased then go to next step
  if (!user.isModified("password")) {
    next();
  }
  // Hash the password
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// json web token --> Tokens, such as JWTs (JSON Web Tokens),are typically not stored in the database along with other user details. Instead, they  are issued by the server during the authentication process and then stored on the client-side(e.g., in cookies or local stored) for later use
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECTECT_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// compare the password
userSchema.methods.passwordCompare = async function (password) {
  return bcrypt.compare(password, this.password);
};

// define the model or the collection name is (User => in database this go to convert into users)
const User = new mongoose.model("User", userSchema);

module.exports = User;
