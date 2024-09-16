
const router = require("express").Router();
const Product = require('../models/Product')


router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        return res.status(200).json(savedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); 
        return res.status(200).json(products); 
    } catch (err) {
        return res.status(500).json(err); 
    }
});
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); 
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); 
        }
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json(err); 
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id); 
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' }); 
        }
        return res.status(200).json({ message: 'Product deleted successfully' }); 
    } catch (err) {
        return res.status(500).json(err); 
    }
});




module.exports = router;

