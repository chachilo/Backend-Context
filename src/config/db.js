import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';

const MONGO_URL = `mongodb+srv://${encodeURIComponent('rafael3041220219')}:${encodeURIComponent('Casterfiler25@')}@cluster0.mongodb.net/usuarios?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    // Conexión inicial con Mongoose
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB using Mongoose.");

    // Crear un cliente MongoClient para enviar un ping
    const client = new MongoClient(MONGO_URL, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    // Conectar el cliente a la base de datos
    await client.connect();

    // Enviar un ping para confirmar la conexión
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // Cerrar el cliente después de confirmar la conexión
    await client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

// Llamar a la función connectDB para iniciar la conexión
connectDB();
