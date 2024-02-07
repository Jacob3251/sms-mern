const express = require("express");
const router = express.Router();

const {
  getStudent,
  setStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// get all the students
router.get("/", getStudent);
// add new student
router.post("/add", setStudent);

// update student
router.put("/:id/update", updateStudent);
// delete student
router.delete("/:id/delete", deleteStudent);

module.exports = router;
