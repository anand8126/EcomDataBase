const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderDate: {
      type: String,
      default: Date.now,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const orderItemSchema = mongoose.Schema(
  {
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
const orderItem=mongoose.model("orderItem", orderItemSchema)
module.exports = {Order,orderItem};
