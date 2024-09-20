const { Schema } = require("mongoose");

const CourseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  desc: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  imageUrl: {
    type: String,
  },
});

module.exports = { CourseSchema };
