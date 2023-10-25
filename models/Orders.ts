import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IProduct extends Document {
  product_id: Schema.Types.ObjectId;
  quantity: Number;
}
interface IOrders extends Document {
  order_no: string;
  products: Array<IProduct>;
  order_status: string;
  userId: Schema.Types.ObjectId;
  customerId: Schema.Types.ObjectId;
}

const orderSchema: Schema<IOrders> = new Schema({
  order_no: {
    type: String,
    required: true,
  },
  products: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  order_status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "completed"],
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Orders: Model<IOrders> =
  mongoose.models.Orders || model("Orders", orderSchema);

export default Orders;
