import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IProduct extends Document {
  product_name: string;
  product_description: string;
  product_price: Number,
  product_totalstock: Number,
  product_availablestock: Number,
  product_image_url:string,
  user: Schema.Types.ObjectId;
}

const productSchema: Schema<IProduct> = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_totalstock: {
    type: Number,
    required: true,
  },
  product_availablestock: {
    type: Number,
    required: true,
  },
  product_image_url: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Products: Model<IProduct> = mongoose.models.Products || model("Products", productSchema);

export default Products;
