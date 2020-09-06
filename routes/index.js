let express = require('express')
var router = express.Router();
router.get('/api', (req, res, next) => {
  console.log('API Works!!!');
})

module.exports = router;
