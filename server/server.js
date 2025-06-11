require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./configs/db");
const clerkWebHooks = require("./controllers/clerkWebHooks"); // ✅ CommonJS import

const app = express();

connectDb(); // ✅ Connect to MongoDB
app.use(cors());
app.use(express.json());

app.post("/api/webhooks/clerk", clerkWebHooks); // ✅ Webhook endpoint

app.get("/", (req, res) => res.send("API is Working nice"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
