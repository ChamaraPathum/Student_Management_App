const express = require("express");
const app = express();
var bodyParser = require("body-parser"); 
const port = 5000;
const user = require("./routers/user");
const student = require("./routers/student");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", user);
app.use("/students", student);

app.listen(port, () => {
  console.log(`student_mgt app listening on port ${port}`);
});
