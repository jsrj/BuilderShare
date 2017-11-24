const express = require('express');
const router  = express.Router();

/* GET base API URI */
router.get('/', (req, res, next) => {
  //res.render('index');
  res.json({
    "message": "welcome"
  });
});

module.exports = router;
