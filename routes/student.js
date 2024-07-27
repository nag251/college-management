
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = [
    {
      id: 1,
      name: "Alex",
      branchName: "ECE",
    },
    {
      id: 2,
      name: "John",
      branchName: "CSE",
    }
  ]
  res.send(data);
});



/** GET signle studet */
router.get('/:studentId', function(req, res, next) {
  const studentId = req.params?.studentId;
  const studentInfo =     {
    id: 2,
    name: "John",
    branchName: "CSE",
  };
  res.send(studentInfo);
});


/**
 * Creat a below APIs
 * - /student [GET] - DONE
 * - /student [POST]
 * 
 * - /student/:studentId [GET] - DONE
 * - /student/:studentId [PUT]
 * - /student/:studentId [DELETE]
 * 
 */

module.exports = router;
