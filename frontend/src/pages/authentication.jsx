import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Snackbar,
  Collapse,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";

const theme = createTheme();

export default function Authentication() {
  const [formState, setFormState] = React.useState(0); // 0 = login, 1 = signup
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setUsername("");
        setPassword("");
        setName("");
        setError("");
        setFormState(0);
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Something went wrong";
      setError(msg);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{
          height: "100vh",
          background:
            "linear-gradient(145deg,#00053D 0%, #002B7F 50%, #0955FF 100%)",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          component={Paper}
          elevation={10}
          sx={{
            borderRadius: 3,
            width: { xs: "90%", sm: 400 },
            p: 4,
            backgroundColor: "#3F3F46",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {formState === 0 ? "Sign In" : "Sign Up"}
            </Typography>
            
            <Box component="form" noValidate sx={{ width: "100%" }}>
              <Collapse in={formState === 1}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ input: { color: "#fff" }, label: { color: "#ccc" } }}
                />
              </Collapse>

              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ input: { color: "#fff" }, label: { color: "#ccc" } }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ input: { color: "#fff" }, label: { color: "#ccc" } }}
              />

              {error && (
                <Typography color="error" variant="body2" mt={1}>
                  {error}
                </Typography>
              )}

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#a1a1aa", color: "#1a1a1a" }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>

              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
             <Typography
  variant="body2"
  onClick={() => setFormState(formState === 0 ? 1 : 0)}
  sx={{ color: "#ccc", fontSize: "12px", cursor: "pointer" }}
>
  {formState === 0
    ? "Don't have an account? Sign Up"
    : "Already have an account? Login"}
</Typography>

              </Box>
            </Box>
          </Box>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          message={message}
          onClose={() => setOpen(false)}
        />
      </Grid>
    </ThemeProvider>
  );
}
