const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const PORT = 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://database:27017/devopsdb";

const client = new MongoClient(MONGO_URI);

let db;

async function connectDatabase() {
    await client.connect();
    db = client.db("devopsdb");
    console.log("Connected to MongoDB");
}

app.get("/api/health", async (req, res) => {
    try {
        await db.command({ ping: 1 });

        res.json({
            status: "success",
            message: "Frontend -> Backend -> MongoDB communication successful",
            database: "MongoDB connected",
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Database connection failed",
            error: error.message
        });
    }
});

app.get("/api", (req, res) => {
    res.json({
        application: "Docker Compose 3-Tier Application",
        frontend: "Nginx",
        backend: "Node.js + Express",
        database: "MongoDB"
    });
});

connectDatabase()
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Backend running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    });
