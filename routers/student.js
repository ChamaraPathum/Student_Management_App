const express = require("express");
const router = express.Router();
var connection = require("../db");

//-----add student-----------------------
router.post("/", (req, res) => {
  connection.query(
    "INSERT INTO student VALUES(?,?,?,?,?)",
    [
      req.body.std_id,
      req.body.std_name,
      req.body.std_address,
      req.body.std_course,
      req.body.std_reg_date,
    ],
    (err, rows) => {
      console.log("student post");

      if (err) throw err;
      res.json("Student added");
    }
  );
});

//---------get student by id------------------
router.get("/:std_id", (req, res) => {
  connection.query(
    "SELECT std_name,std_address,std_course,std_reg_date, from student where std_id=?",
    [req.params.std_id],
    (err, rows) => {
      console.log("student get by id");

      if (err) throw err;
      res.json("Status:Student Added");
    }
  );
});

//---------get all students---------------------
router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM student ",

    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

//---------update students----------------------
router.put("/:std_id", (req, res) => {
  connection.query(
    "UPDATE student set std_name=?,std_address=?,std_course=?,std_reg_date=?, where std_id=?",
    [
      req.body.std_name,
      req.body.std_address,
      req.body.std_course,
      req.body.std_reg_date,
      req.params.std_id,
    ],
    (err, rows) => {
      console.log("update student");

      if (err) throw err;
      res.json(rows);
    }
  );
});

//-----delete student----------------------------
router.delete("/:std_id", (req, res) => {
  connection.query(
    "DELETE from student where std_id=? ",
    [req.params.std_id],

    (err, rows) => {
      console.log("Delete student");

      if (err) throw err;
      res.json(rows);
    }
  );
});

module.exports = router;
