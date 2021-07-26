const router = require("express").Router();
const htmlRoutes = require("./apiRoutes/htmlInfo");
router.use(htmlRoutes);
router.use(require("./htmlRoutes"));

module.exports = router;