const express = require('express');
const router  = express.Router();

/* GET base API URI */
router.get('/', (req, res, next) => {
  //res.render('index');
  res.json({
    "message": "welcome! Something not working the way it should? Let us know, and earn credit toward your account for reporting the inconvenience."
  });
});

module.exports = router;
