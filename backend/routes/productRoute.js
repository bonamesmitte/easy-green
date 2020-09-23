import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';
import { getToken } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(products);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOne({ _id: productId });
  if (!product._id) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'New Product Created.', data: updatedProduct });
    }
    return res.status(500).send({ message: 'Product Updated.' });
  }
  return res.status(500).send({ message: 'Error in Updating Product.' });
});

router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created.', data: newProduct });
  }
  return res.status(500).send({ message: 'Error in Creating Product.' });
});

router.delete('/:id', async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion');
  }
});

export default router;
