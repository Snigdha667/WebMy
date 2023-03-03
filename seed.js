const mongoose = require('mongoose');
const Product = require('./models/product');


const DUMMY_PRODUCTS = [

{

heading: 'Ukraine War',
name:'Ukraine War',
date: '1/1/2003',
desc: "Free content encompasses all works in the public domain and also those copyrighted"
},
{

    name: 'Ukraine War',
    heading: 'Ukraine War',
    date: '1/1/2003',
    desc: "Free content encompasses all works in the public domain and also those copyrighted"
    },
    {

        name: 'Ukraine War',
        heading: 'Ukraine War',
        date: '1/1/2003',
        desc: "Free content encompasses all works in the public domain and also those copyrighted"
        },
        {

            name: 'Ukraine War',
            heading: 'Ukraine War',
            date: '1/1/2003',
            desc: "Free content encompasses all works in the public domain and also those copyrighted"
           
            }
]
async function seedDB() {

    await Product.insertMany(DUMMY_PRODUCTS) ;
    console. log('DB Seeded') ;
}
    module.exports = seedDB;
