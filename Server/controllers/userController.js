const User = require("../model/userModel");
const bcrypt = require("bcrypt");
module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used!!", status: false });
    const hash = await bcrypt.hash(password, 10);
    const user =await User.create({
      email,
      username,
      password: hash,
    });
    delete user.password;
    // console.log(user);
    return res.json({ user, status: true });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "User does'nt Exists!!", status: false });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck)
      return res.json({ msg: "Invalid Password!!", status: false });
    delete user.password;

    return res.json({ user, status: true });
  } catch (err) {
    next(err);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (err) {
    next(err);
  }
};


module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

