import mongoose from "mongoose";

const MONGO_USERNAME = "rafael3041220219";
const MONGO_PASSWORD = "Casterfiler25%";
const MONGO_CLUSTER = "cluster0.m9fchhq.mongodb.net";
const MONGO_DATABASE = "usuarios"; // Reemplaza "usuarios" con el nombre de tu base de datos

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DATABASE}`;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
};
