var express = require("express");
const { Db } = require("mongodb");
var router = express.Router();
var moment = require("moment"); // require
moment().format();

module.exports = function (db) {
  /* GET home page. */

  router.get("/", function (req, res, next) {

    db.collection("users")
      .find()
      .toArray()
      .then((results) => {
        console.log(results);
        res.render("list", { users: results });
      })
      .catch((error) => console.error(error));
    // ...
  });

  return router;
};
