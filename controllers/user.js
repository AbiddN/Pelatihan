require("dotenv").config();

const User = require("../models/user");
const Active = require("../models/activeUser");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  let { email, username, password, hobi } = req.body;

  if (!hobi) {
    return res.status(400).json({
      message: "Hobi wajib diisi",
    });
  }
  // console.log(req.body);
  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: "Email sudah digunakan",
    });
  }

  /* Encrypt password */
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  user = new User({ username, email, hobi, password: hashedPassword});
  user.save((err) => {
    if (err)
      return res.status(500).json({
        message: err.message,
      });
    return res.status(201).json({
      message: "Berhasil membuat akun",
      data: user,
    });
  });
}

async function login(req, res) {
  let { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "email tidak terdaftar",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "passwordmu salah cuy",
    });
  }

  let token = `iniadalahtoken`;
  let mess = user.username + ', selamat anda berhasil masuk'

  return res.status(200).json({
    message: mess,
    data: {
      token,
    },
  });
}

async function getMyProfile(req, res) {
  let { email } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "email tidak terdaftar",
    });
  }

  user = user.toObject();
  delete user.password;

  let mess = user.username + `'s profile`;

  return res.status(200).json({
    message: mess,
    data: user,
  });
}

module.exports = { register, login, getMyProfile};
