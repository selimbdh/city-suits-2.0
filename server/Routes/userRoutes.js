const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  login,
  register,
  setRole,
  getAllUsers,
} = require("../controllers/userController");

router.post("/login", login);
router.post("/register", register);
router.post("/setRole", authMiddleware, setRole);
router.get("/all", authMiddleware, getAllUsers);

module.exports = router;
