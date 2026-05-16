const { model } = require('mongoose');
const Vault = require('../models/Vault');

// create a new vault entry
exports.createVault = async (req, res) => {
    try{
        const {message} = req.body;

        if(!message){
            return res.status(400).json({
                success: false,
                message: 'Message is required'
            });
        }

        const vautltId= nanoid(8); // generate a unique vault ID

        const newVault = await Vault.create({
            vaultId,
            message
        });
        res.status(201).json(newVault);
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: error.message });
    }
}
// export the controller functions
module.exports = {
    createVault
}