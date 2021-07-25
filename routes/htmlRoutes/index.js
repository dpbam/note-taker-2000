const router = require("express").Router();
const htmlRoutes = require("./apiRoutes/htmlInfo");
// path to the other file in the um...I don't get why they have it
router.use(htmlRoutes);
router.use(require("./htmlRoutes"));

module.exports = router;