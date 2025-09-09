  import * as React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    confirmOrder,
    deleteOrder,
    deliveredOrder,
    getOrders,
    shipOrder,
  } from "./../../state/Admin/Order/Action";
  import Card from "@mui/material/Card";
  import CardHeader from "@mui/material/CardHeader";
  import TableContainer from "@mui/material/TableContainer";
  import Table from "@mui/material/Table";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import TableCell from "@mui/material/TableCell";
  import TableBody from "@mui/material/TableBody";
  import Paper from "@mui/material/Paper";
  import Avatar from "@mui/material/Avatar";
  import AvatarGroup from "@mui/material/AvatarGroup";
  import Button from "@mui/material/Button";
  import Menu from "@mui/material/Menu";
  import MenuItem from "@mui/material/MenuItem";

  const OrdersTable = () => {
    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);
    const handleClick = (event, index) => {
      const newAnchorElArray = [...anchorEl];
      newAnchorElArray[index] = event.currentTarget;
      setAnchorEl(newAnchorElArray);
    };
    const handleClose = (index) => {
      const newAnchorElArray = [...anchorEl];
      newAnchorElArray[index] = null;
      setAnchorEl(newAnchorElArray);
    };

    const dispatch = useDispatch();
    const { adminOrder } = useSelector((store) => store);

    const handleShippedOrder = (orderId) => {
      dispatch(shipOrder(orderId));
      handleClose();
    };

    const handleConfirmedOrder = (orderId) => {
      dispatch(confirmOrder(orderId));
      handleClose();
    };

    const handleDeliveredOrder = (orderId) => {
      dispatch(deliveredOrder(orderId));
      handleClose();
    };

    const handleDeleteOrder = (orderId) => {
      dispatch(deleteOrder(orderId));
    };

    React.useEffect(() => {
      dispatch(getOrders());
    }, [
      adminOrder.confirmed,
      adminOrder.shipped,
      adminOrder.delivered,
      adminOrder.deletedOrder,
    ]);

    console.log("Admin Orders ", adminOrder);

    return (
      <div className="p-5">
        <Card
          className="border border-gray-300 p-5"
          sx={{ borderRadius: "10px" }}
        >
          <CardHeader
            sx={{ textAlign: "center", marginBottom: 2, padding: 0 }}
            title="All Orders"
          />
          <TableContainer
            className="border border-gray-300"
            sx={{ borderRadius: "10px" }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="orders table">
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  {/* <TableCell>Discounted Price</TableCell> */}
                  <TableCell>Quantity</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminOrder.orders?.map((order, index) => (
                  <TableRow key={order?.id}>
                    <TableCell>{order?.id}</TableCell>
                    <TableCell>
                      <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                        {order.orderItem?.map((orderItem) => (
                          <Avatar                   
                            key={orderItem?.id}
                            className="border border-gray-300"
                            src={orderItem?.product?.imageUrl}
                            alt={orderItem?.product?.title}  
                          />                    
                        ))}
                      </AvatarGroup>
                    </TableCell>
                    <TableCell>
                      {order.orderItem?.map((orderItem) => (
                        <p key={orderItem.id}>{orderItem?.product?.title}</p>
                      ))}
                    </TableCell>
                    <TableCell>₹{order.totalPrice}</TableCell>
                    {/* <TableCell>₹{order.totalDiscountedPrice}</TableCell> */}
                    <TableCell>{order.totalItem}</TableCell>
                    <TableCell>
                      <span
                        className={`text-white px-5 py-2 rounded-full
                        ${
                          order.orderStatus === "CONFIRMED"
                            ? "bg-[#2a8c2a]"
                            : order.orderStatus === "SHIPPED"
                            ? "bg-[#0b0080]"
                            : order.orderStatus === "PENDING"
                            ? "bg-[#5a5151]"
                            : order.orderStatus === "PLACED"
                            ? "bg-[green]"
                            : "bg-[#0d5615]"
                        }
                        `}
                      >
                        {order.orderStatus}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        id="basic-button"
                        aria-haspopup="true"
                        onClick={(event) => handleClick(event, index)}
                        aria-controls={`basic-menu-${order.id}`}
                        aria-expanded={Boolean(anchorEl[index])}
                      >
                        Status
                      </Button>
                      <Menu
                        id={`basic-menu-${order.id}`}
                        anchorEl={anchorEl[index]}
                        open={Boolean(anchorEl[index])}
                        onClose={() => handleClose(index)}
                        slotProps={{
                          list: {
                            "aria-labelledby": "basic-button",
                          },
                        }}
                      >
                        <MenuItem onClick={() => handleConfirmedOrder(order.id)}>
                          Confirmed
                        </MenuItem>
                        <MenuItem onClick={() => handleShippedOrder(order.id)}>
                          Shipped
                        </MenuItem>
                        <MenuItem onClick={() => handleDeliveredOrder(order.id)}>
                          Delivered
                        </MenuItem>
                      </Menu>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeleteOrder(order.id)}
                        sx={{ width: "20px" }}
                        variant="outlined"
                        color="error"
                      >
                        ❌
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    );
  };

  export default OrdersTable;
