const router = require("express").Router();
const UserController = require("../controllers/user");
const { verifyToken } = require("../middlewares/auth");
const content = require("../controllers/content");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current_user", verifyToken, UserController.getMyProfile);
router.get("/home", verifyToken, content.home);
router.get("/acara", verifyToken, content.acara)

module.exports = router;
