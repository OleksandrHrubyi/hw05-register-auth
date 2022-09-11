const express = require("express");
const router = express.Router();
const { registration, login, logout, updateAvatar, refresh } = require("../../controllers/users");
const guard = require("../../helper/guard");
const uploadAvatar = require('../../helper/upload-avatar')

router.post("/signup", registration);
router.post("/login", login);
router.get("/current", guard, refresh);
router.post("/logout", guard, logout);
router.patch(
    "/avatars",
    guard,
    uploadAvatar.single('avatar'),
    updateAvatar)

module.exports = router;
