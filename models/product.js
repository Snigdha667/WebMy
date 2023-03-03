const mongoose = require('mongoose');
const NewSchema = new mongoose. Schema({
    name:{
        type: String,
         trim: true,
         required: true},
         heading:{
            type: String,
             trim: true,
            },
         date:{
            type: String,
            trim: true,},
            desc: { 
                type: String,
                trim:true }
});

const Product = mongoose.model( 'Product', NewSchema);
module.exports= Product;
