import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect } from "react";
//import { deleteProduct, findProducts } from "../../state/Product/Action";
import { useDispatch, useSelector} from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { findProducts } from "../../state/Product/Action";




const ProductTableView = () => {
  const { products, deletedProduct } = useSelector((store) => store.product);
  console.log("products --> ", products);

  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: null,
    };

    console.log("Dispatching findProducts with data:", data);
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  return (
    <div className="">
      <Card
        className="border border-gray-300 p-5"
        sx={{ borderRadius: "10px" }}
      >
        <CardHeader
          sx={{ textAlign: "center", marginBottom: 2, padding: 0 }}
          title="Recent Products"
        />
        <TableContainer
          className="border border-gray-300"
          sx={{ borderRadius: "10px" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.content?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Avatar
                      variant="square"
                      className="border border-gray-300"
                      sx={{
                        height: "4rem",
                        width: "4rem",
                        borderRadius: "10px",
                      }}
                      src={item.imageUrl}
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.category.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductTableView;