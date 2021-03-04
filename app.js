// loads the .env file
require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;
const API_URL = process.env.API_URL;
const APCA_API_KEY_ID = process.env.APCA_API_KEY_ID;
const APCA_API_SECRET_KEY = process.env.APCA_API_SECRET_KEY;

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                "APCA-API-KEY-ID": APCA_API_KEY_ID,
                "APCA-API-SECRET-KEY": APCA_API_SECRET_KEY,
            },
        });
        const data = response.data;
        res.json(data);
    } catch (e) {
        console.error("ERROR", e);
        res.status(500).json({ message: "error" });
    }
});

app.listen(PORT, () =>
    console.log(`server is running on http://localhost:${PORT}`)
);
