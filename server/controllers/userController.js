const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const {
      body: { email, password },
    } = req;

    if (!email && !password) {
      return res.status(301).json({
        message: "Email or password required",
      });
    }

    const user = await users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Bad cred" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.pwd);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Bad cred" });
    }

    const token = jwt.sign({ id: user["_id"] }, "SECRETCODE");

    return res
      .status(200)
      .json({ name: user.name, email: user.email, token, id: user["_id"] });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

const register = async (req, res) => {
  try {
    const {
      body: { name, email, password, phone, role },
    } = req;

    if (!email && !name && !phone && !password) {
      return res.status(301).json({
        message: "Please fill all required fields",
      });
    }

    const newpassword = await bcrypt.hash(password, 10);

    const user = new users({
      name,
      email,
      phone,
      pwd: newpassword,
    });

    user.save();

    return res.status(200).json({ message: "User Saved" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const setRole = async (req, res) => {
  try {
    const {
      user: { role },
      body: { userID, newRole },
    } = req;

    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "unauthorized",
      });
    }
    if (!userID || !newRole) {
      return res.status(300).json({
        message: "user ID And role required",
      });
    }

    const updatedUser = await users.findByIdAndUpdate(
      userID,
      { role: newRole.toUpperCase() },
      { new: true }
    );

    return res.status(200).json({ message: "User Updates", updatedUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const {
      user: { role },
    } = req;

    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "unauthorized",
      });
    }

    const usersList = await users.find({});

    return res.status(200).json({ message: "USERS LIST ", usersList });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { register, login, setRole, getAllUsers };
