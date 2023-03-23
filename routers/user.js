const express = require("express");
const router = express.Router();
var connection = require("../db");

//-----add user-------------------
router.post("/", (req, res) => {
  connection.query(
    "INSERT INTO user VALUES(?,?,?,?)",
    [
      req.body.user_id,
      req.body.user_name,
      req.body.user_email,
      req.body.user_password,
    ],
    (err, rows) => {
      console.log("user post");

      if (err) throw err;
      res.json(rows);
    }
  );
});

//-----get all users----------
router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM user ",

    (err, rows) => {
    
      if (err) throw err;
      res.json(rows);
    }
  );
});

//-----get users by id------------
router.get("/:user_id", (req, res) => {
  connection.query(
    "SELECT user_name,user_email from user where user_id=?",
    [req.params.user_id],
    (err, rows) => {
      console.log("user get by id");

      if (err) throw err;
      res.json(rows);
    }
  );
});

//-----update users--------------
router.put("/:user_id", (req, res) => {
  connection.query(
    "UPDATE user set user_name=?,user_email=?,user_password=? where user_id=?",
    [
      req.body.user_name,
      req.body.user_email,
      req.body.user_password,
      req.params.user_id,
    ],
    (err, rows) => {
      console.log("update user details");

      if (err) throw err;
      res.json(rows);
    }
  );
});

//-----delete user-----------------
router.delete("/:user_id", (req, res) => {
  connection.query(
    "DELETE from user where user_id=?",
    [req.params.user_id],
    (err, rows) => {
      console.log("delete user");

      if (err) throw err;
      res.json(rows);
    }
  );
});

module.exports = router;
