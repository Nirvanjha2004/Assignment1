const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  img: String,
  category: String,
  size: String,
  color: {type: String, default: 'red'},
  productId: { type: String, unique: true }, // Added productId field
  visibility: { type: String, default: 'on' } // Visibility field with default 'on'
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;