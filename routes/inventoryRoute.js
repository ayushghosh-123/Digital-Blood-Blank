import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { createInventoryController } from '../controllers/inventoryController.js ';

// Create a router object
const router = express.Router();

// Define routes
router.post('/create-inventory', authMiddleware, createInventoryController);

// Export the router
export default router;

