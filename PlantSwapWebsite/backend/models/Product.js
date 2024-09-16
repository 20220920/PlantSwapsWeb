const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    desc: {
        type: String,
        max: 200,
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
    },
    amount: {
        type: Number, 
        default: 1,   
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);