const router = require("express").Router();
const collegeRoutes = require("./collegeAPI");
const userRoutes = require("./userLogin")

router.use('/college', collegeRoutes);
router.use('/user',userRoutes)

// Book routes
// router.use("/books", userRoutes);

module.exports = router;
