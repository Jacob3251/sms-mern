// using the express-async-handler is for not using the try catch rather using the middleware
// npm i express-async-handler

const asyncHandler = require("express-async-handler");

const Student = require("../model/studentModel");

// @desc get students
// @route GET /api/v1/student
// @access Private
const getStudent = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

// @desc set students
// @route POST /api/v1/student/add
// @access Private
const setStudent = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const student = await Student.create({
    name: req.body.name,
  });
  res.status(200).json(student);
});

// @desc get students
// @route PUT /api/v1/student/:id/update
// @access Private
const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(400);
    throw new Error("Student not found");
  }

  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedStudent);
});

// @desc get students
// @route DELETE /api/v1/student/:id/delete
// @access Private
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(400);
    throw new Error("Student not found");
  }
  await student.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getStudent,
  setStudent,
  updateStudent,
  deleteStudent,
};
