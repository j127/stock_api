// loads the .env file
require("dotenv").config();

const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 5000;
const API_URL = process.env.API_URL;

app.get("/", async (req, res) => {
    const url = "";
    try {
        const response = await axios.get(url);
        const data = response.data;
        res.json(data);
    } catch (e) {
        console.error("ERROR", e);
        res.status(500).json({ message: "error" });
    }
});

app.listen(PORT, () =>
    console.log("server is running at http://localhost:${PORT}")
);
