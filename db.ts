import mongoose from "mongoose";

const connect = async () => {
  const mongoURL = process.env.MONGO_URL;

  if (!mongoURL) {
    console.error("MONGO_URL is not defined in your environment variables.");
    return;
  }

  try {
    await mongoose.connect(mongoURL);
    console.log("DATABASE CONNECTED SUCCESSFULLY 🚀");
  } catch (error) {
    console.log("DATABASE CONNECTION ERROR ❌")
  }
};

export default connect;
