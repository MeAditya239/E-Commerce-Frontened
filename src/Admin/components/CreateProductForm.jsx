import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../state/Product/Action';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';


const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];



const CreateProductForm = () => {

  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",  
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });


  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log(productData);
  };






  return (
    <div className="p-10">
      <Typography variant="h3" className="py-10 text-center">
        Add New Product
      </Typography>

      <form onSubmit={handleSubmit} className="min-h-screen">
        {/* Wrapper with grid system */}
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              type="number"
              value={productData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={productData.price}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              type="number"
              value={productData.discountedPrice}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPercent"
              type="number"
              value={productData.discountPercent}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
              >
                <MenuItem value="tops">Tops</MenuItem>
                <MenuItem value="women_dress">Dresses</MenuItem>
                <MenuItem value="t-shirts">T-Shirts</MenuItem>
                <MenuItem value="saree">Saree</MenuItem>
                <MenuItem value="lengha_choli">Lengha Choli</MenuItem>
                <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TextField
            fullWidth
            label="Description"
            multiline
            name="description"
            rows={3}
            value={productData.description}
            onChange={handleChange}
          />

          {/* Sizes */}
          {productData.size.map((size, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Size Name"
                name="name"
                value={size.name}
                onChange={(event) => handleSizeChange(event, index)}
                required
                fullWidth
              />
              <TextField
                label="Quantity"
                name="size_quantity"
                type="number"
                onChange={(event) => handleSizeChange(event, index)}
                required
                fullWidth
              />
            </div>
          ))}

          <Button
            variant="contained"
            size="large"
            type="submit"
            className="w-full py-3 mt-4"
          >
            Add New Product
          </Button>
        </div>
      </form>
    </div>
  );
  
}

export default CreateProductForm
