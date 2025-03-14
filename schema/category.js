let mongoose = require("mongoose");
let categorySchema =  mongoose.Schema({
    name: {
        type: String,
        repuire: true,
        unique: true,
    },
    discription:{
        type: String,
        default: "",
    },
    isdeleted:{
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});
module.exports = mongoose.model("category", categorySchema);