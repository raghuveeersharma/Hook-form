import express from "express";
import cors from "cors";
import User from "./modals/user.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const { email, password, Username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      Username,
    });
    res.status(201).json(user);
    console.log(user + "created");
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
