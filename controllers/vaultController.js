const { nanoid } = require("nanoid");
const Vault = require("../models/Vault");

// create a new vault entry
const createVault = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required"
            });
        }

        const vaultId = nanoid(8); // generate unique id

        const newVault = await Vault.create({
            vaultId,
            message
        });

        return res.status(201).json({
            success: true,
            data: newVault
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createVault
};