import express from "express";
import { testController } from "../controllers/testController.js"; // Ensure the file name matches exactly

// Create router object
const router = express.Router();

// Define routes
router.get('/', testController);

// Export router
export default router;
