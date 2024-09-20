import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/signup", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{
              mt: 2,
            }}
            required
            fullWidth
            label="Full name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{
              mt: 2,
            }}
            required
            fullWidth
            label="Email"
            type="emaail"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{
              mt: 2,
            }}
            required
            fullWidth
            label="password"
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            sx={{
              mt: 2,
            }}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Sign Up
          </Button>
        </form>
        <h5 style={{ textAlign: "center", marginTop: "2rem" }}>OR</h5>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account? &nbsp;{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", fontWeight: "600" }}
            fullWidth
          >
            Login
          </Link>
        </p>
      </Paper>
    </Container>
  );
}

export default Signup;
