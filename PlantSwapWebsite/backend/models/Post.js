const mongoose = require("mongoose");

const PostShema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type:String,
        max: 200,
    },
    img: {
        type: String,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Post",PostShema)