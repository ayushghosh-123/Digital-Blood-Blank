import express from "express";
import { currentuserController, registerController, loginController } from "../controllers/authController.js"; // Consolidated imports from authController
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Define the register route
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Get current user || GET
router.get('/current-user', authMiddleware, currentuserController);

// Export the router correctly using ES modules
export default router;
