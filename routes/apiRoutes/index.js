const router = require("express").Router();
const apiRoutes = require("./apiRoutes/notesInfo");
router.use(apiRoutes);
router.use(require("./apiRoutes"));

module.exports = router;

// looks at notesInfo points to notesInfo.js