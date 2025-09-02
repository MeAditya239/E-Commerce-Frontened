import { Button } from "@headlessui/react";
import { Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, register } from "../../state/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector( store => store)

  

  useEffect(() => {
    if(jwt) {
      dispatch(getUser(jwt))
    }
    
  }, [jwt, auth.jwt])

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(register(userData))
    

    console.log("userdata ", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flex: 1 }}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </div>
          <div style={{ flex: 1 }}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </div>
        </div>
        <div>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            style={{ marginTop: "1rem" }}
          />
        </div>
        <div>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="new-password"
            style={{ marginTop: "1rem" }}
          />
        </div>
        <div>
          <Button
            className="w-full bg-indigo-700 text-white p-2 my-4 rounded-lg"
            variant="contained"
            type="submit"
            size="large"
            sx={{
              padding: ".8rem 0",
              marginTop: "1rem",
              backgroundColor: "#4F39F6",
            }}
          >
            Register
          </Button>
        </div>
      </form>

      <div className="flex justify-center flex-col items-center">
        <p>If you have already Account ?</p>
        <Button onClick={() => navigate("/login")} className='ml-5' size='small'>Login</Button>
      </div>
    </div>
  );
};

export default RegisterForm;
