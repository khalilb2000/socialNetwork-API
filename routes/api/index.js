const router = require("express").Router();
const userRoutes = require("./users-routes");
const thoughtRoutes = require("./thoughts-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;