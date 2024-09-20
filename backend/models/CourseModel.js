const { model } = require("mongoose");

const { CourseSchema } = require("../schemas/CourseSchema");

const CourseModel = model("course", CourseSchema);

module.exports = { CourseModel };
