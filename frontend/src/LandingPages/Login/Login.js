import React from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
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
        <Typography variant="h5">Login</Typography>
        <form>
          <TextField
            sx={{
              mt: 2,
            }}
            required
            fullWidth
            label="Email"
            variant="outlined"
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
            Login
          </Button>
          <Typography textAlign={"center"} mt={2}>
            OR
          </Typography>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            Create a new account? &nbsp;{" "}
            <Link to={"/signup"}
              style={{ textDecoration: "none", fontWeight: "600" }}
              fullWidth
            >
              SignUp
            </Link>
          </p>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
