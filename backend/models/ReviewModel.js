const { model } = require("mongoose");

const { ReviewSchema } = require("../schemas/ReviewSchema");

const ReviewModel = model("review", ReviewSchema);

module.exports = { ReviewModel };
