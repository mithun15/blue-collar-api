import mongoose from "mongoose";

export const connectMongoDB = async (connectionURI) => {
  return mongoose.connect(connectionURI);
};
