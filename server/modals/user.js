import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/Ract-Form-Hook").then(() => {
  console.log("Connected");
});

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
