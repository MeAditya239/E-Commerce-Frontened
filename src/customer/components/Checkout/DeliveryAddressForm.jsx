import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../state/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
    };

    const orderData = { address, navigate};
    dispatch( createOrder( orderData) )
    console.log("Address Submit", address);
  };

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "98%",
          maxWidth: "1400px",
          minHeight: "500px",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Left side */}
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 50%" },
            bgcolor: "#fafafa",
            borderRight: { xs: "none", md: "1px solid #eee" },
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "flex-start",
            // alignItems: "center",
            p: 3,
            minWidth: 300,
          }}
        >
          <AddressCard />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3, width: "100%" }}
          >
            Change Address
          </Button>
        </Box>

        {/* Right side form */}
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 50%" },
            bgcolor: "#fff",
            p: 4,
            minWidth: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                fullWidth
                required
              />
              <TextField
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                fullWidth
                required
              />
            </Box>
            <TextField
              label="Address"
              name="address"
              autoComplete="address"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
                mt: 2,
              }}
            >
              <TextField
                label="City"
                name="city"
                autoComplete="city"
                fullWidth
                required
              />
              <TextField
                label="State/Province/Region"
                name="state"
                autoComplete="state"
                fullWidth
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
                mt: 2,
              }}
            >
              <TextField
                label="Zip / Postal Code"
                name="zip"
                autoComplete="zip"
                fullWidth
                required
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                fullWidth
                required
              />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, width: "100%" }}
              type="submit"
            >
              Deliver Here
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default DeliveryAddressForm;