// using the express-async-handler is for not using the try catch rather using the middleware
// npm i express-async-handler

const asyncHandler = require("express-async-handler");

// @desc get students
// @route GET /api/v1/student
// @access Private
const getStudent = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Students",
  });
});

// @desc set students
// @route POST /api/v1/student/add
// @access Private
const setStudent = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "set Students",
  });
});

// @desc get students
// @route PUT /api/v1/student/:id/update
// @access Private
const updateStudent = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "update Students",
  });
});

// @desc get students
// @route DELETE /api/v1/student/:id/delete
// @access Private
const deleteStudent = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "delete Students",
  });
});

module.exports = {
  getStudent,
  setStudent,
  updateStudent,
  deleteStudent,
};
