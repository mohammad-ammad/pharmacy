import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IRole extends Document {
  name: string;
}

const roleSchema: Schema<IRole> = new Schema({
  name: {
    type: String,
    enum: [
        "admin",
        "doctor",
        "patient"
      ],
    required: true,
  },
});


const Roles: Model<IRole> = mongoose.models.Roles || model("Roles", roleSchema);

export default Roles;
