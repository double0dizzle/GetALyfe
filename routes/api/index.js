const router = require("express").Router();
const collegeRoutes = require("./collegeAPI");

router.use('/college', collegeRoutes);

// Book routes
// router.use("/books", userRoutes);

module.exports = router;
