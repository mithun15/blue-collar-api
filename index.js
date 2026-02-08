import express from "express";
import http from "http";
import { app } from "./app/index.js";
import { connectMongoDB } from "./models/index.js";

const PORT = process.env.PORT ?? 8000;

const init = async () => {
  try {
    await connectMongoDB(process.env.MONGO_URI);
    console.log("MongoDB connected!");

    const server = http.createServer(app);

    server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log("Error starting server", err);
    process.exit(1);
  }
};

init();
