import { Button } from "@headlessui/react";
import { Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/Auth/Action";


const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

 

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData))
    console.log("userdata ", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            Login
          </Button>
        </div>
      </form>
      <div className="flex justify-center flex-col items-center">
        <p>If you don't have Account ?</p>
        <Button
          onClick={() => navigate("/register")}
          className="ml-5"
          size="small"
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
