const mongoose = require('mongoose');

const schema = mongoose.Schema;

const sellerSettings = new schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    sellingLocation : {
        type: String,
        required: false,
        default: 'Select your location'
    },
    StockXSellerRating: {
        type: Number,
        type: String,
        required: false,
        default: 'Select your level'
    },
    GOATSellerLevel : {
        type: Number,
        type: String,
        required: false,
        default: 'Select your rating'
    },
}, 
{timestamps: true})

module.exports = mongoose.model('SellerSettings', sellerSettings);