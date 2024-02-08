import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/USER')
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.error("Error connecting to the database: " + err);
    });

const userSchema = new mongoose.Schema({
    name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

// Routes
app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
  
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
  app.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email: email });
  
      if (existingUser) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
  
        await newUser.save();
        res.send({ message: "Successfully Registered, Please login now." });
      }
    } catch (err) {
      console.error("Error during registration:", err);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

app.listen(3005, () => {
    console.log("Server started at port 3005");
});
