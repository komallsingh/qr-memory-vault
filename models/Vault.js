const mongoose = require('mongoose');

// basic schema - id + message + time
const vaultSchema = new mongoose.Schema({
    vaultId: {
        type: String,
        required: true,
        unique: true
    },

    message:{
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Vault', vaultSchema);