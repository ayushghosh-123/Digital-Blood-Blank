import Inventory from "../models/inventoryModel.js";
import User from "../models/userModel.js"; // Added .js extension

const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not found'); // Corrected error throwing
        }

        if(user.role !== req.body.role) { // Fixed spelling of 'admin'
            return res.status(500).send({
                success: false,
                message: 'Invalid role'
            });
        }

        if (inventoryType === 'in' && user.role !== 'donor') { // Fixed spelling of 'donor'
            throw new Error('Not a donor account'); // Corrected error throwing
        }

        if (inventoryType === 'out' && user.role !== 'hospital') {
            throw new Error('Not a hospital'); // Corrected error throwing
        }

        // Save the record
        const inventory = new Inventory(req.body); // Corrected spelling of 'inventory'
        await inventory.save();
        return res.status(201).send({
            success: true,
            message: 'Inventory created successfully'
        });

    } catch (error) {
        console.error(error); // Use console.error for error logging
        return res.status(500).json({
            success: false,
            message: "Error creating inventory",
            error: error.message, // Include error message in the response
        });
    }
};

export { createInventoryController };
