const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    describtion: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    catagory: {
      type: String,
      default: 'simple',
    },
    startDate: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    endDate: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
