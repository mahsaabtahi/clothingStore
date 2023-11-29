import mongoose, { Connection, connections } from "mongoose";
const connection = {}

async function connectDb() {
    if (connection.isConnected) {
        console.log('Alredu connected to database');
    }
    if (mongoose.connections.length > 0) {
        Connection.isConnected = mongoose.connections[0].readyState;
        if (Connection.isConnected === 1) {
            console.log('Use previous connection to the database');
            return;
        }
        await mongoose.disconnect();


    }
    const db = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("new connection to the database");
    connection.isConnected = db.connections[0].readyState;
}
async function disconnectDb() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log("not disconnecting from database");
        }

    }
}
const db = { connectDb, disconnectDb }
export default db;