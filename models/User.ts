import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: Schema.Types.ObjectId;
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Roles",
  },
});

const Users: Model<IUser> = mongoose.models.Users || model("Users", userSchema);

export default Users;
