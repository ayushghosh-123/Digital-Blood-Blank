import express from "express";
import dotenv from "dotenv";
import colors from "colors"; // Corrected import name (from "color" to "colors")
import morgan from "morgan";
import cors from "cors";
import testRoute from "./routes/testRoute.js"; // Use ES module syntax for import
import authRoute from "./routes/authRoute.js"; // Fixed filename casing to match conventions
import inventoryRoute from "./routes/inventoryRoute.js"; // Renamed variable for consistency

// dotenv configuration
dotenv.config();

// MongoDB connection
import connectDB from "./config/db.js";
connectDB();

// Create express app
const app = express();

// Middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.post("/login", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
// Routes
app.use("/api/v1/test", testRoute); 
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/inventory", inventoryRoute); // Updated variable name for consistency

// Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
    console.log(colors.bgBlue.white(`Server is running IN ${process.env.DEV_MODE} mode on port ${PORT}`));
});
