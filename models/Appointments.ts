import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IAppointment extends Document {
  doctorId: Schema.Types.ObjectId,
  patientId: Schema.Types.ObjectId,
  app_date: Date,
  status: String
}

const appointmentSchema: Schema<IAppointment> = new Schema({
    status: {
        type: String,
        enum: [
            "accepted",
            "rejected",
        ],
        required: true,
    },
    app_date:{
        type:Date,
        required:true
    },
    doctorId:{
        type:Schema.Types.ObjectId,
        ref: "users",
    },
    patientId:{
        type:Schema.Types.ObjectId,
        ref: "users",
    }
});


const Appointments: Model<IAppointment> = mongoose.models.appointments || model("appointments", appointmentSchema);

export default Appointments;
