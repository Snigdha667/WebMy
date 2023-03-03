const express = require( 'express' );
const router = express.Router();
const Product = require('../models/product');


router.get('/articles', async (req, res) => {
    const products = await Product.find({});
    // console.log(products);
    // res.send(products) ;
    res.render('index',{products});

});
router.get('/articles/new', (req, res) => {

    res. render('new');
});
router.post('/articles', async(req, res) => {

    const { name, date, desc } = req.body;
    await Product.create({ name, date, desc });

    res.redirect('/articles');
});
    
module.exports = router;
