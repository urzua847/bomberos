//crear modelo de inventario
// Path: src\models\ntificaton.js
const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
    product_name: {    
    type: String,
    required: true,
  },
  product_code: {
    type: Number,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  quantity_available: {  
    type: Number,
    required: true
  },
  unit_price: {  
    type: Number,
    required: true
  },
  acquisition_date: {  
    type: String,
    required: true
  },
  expiration_date: {  
    type: String,
    required: true
  },
  supplier: {  
    type: String,
    required: true
  }
});
module.exports = mongoose.model('inventory', inventorySchema);