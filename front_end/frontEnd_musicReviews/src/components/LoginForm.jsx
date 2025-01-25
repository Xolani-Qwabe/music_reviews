import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { z } from "zod";
import { registerUser, loginUser } from "../api";
import { useNavigate } from "react-router-dom";

// Validation schema using Zod
const loginSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => !data.confirmPassword || data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const result = loginSchema.safeParse({
      email,
      password,
      confirmPassword: isSignUp ? confirmPassword : undefined,
    });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      if (isSignUp) {
        const response = await registerUser(email, password);
        console.log("Sign Up Successful:", response);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        const response = await loginUser(email, password);
        console.log("Login Successful:", response);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setErrors({ api: error });
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        color: "rgb(157, 241, 232)",
        backgroundColor: "rgba(5, 30, 52, 0.944)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: "bold",
          color: "rgb(157, 241, 232)",
        }}
      >
        {isLoggedIn ? "Welcome Back!" : isSignUp ? "Sign Up" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        {!isLoggedIn && (
          <>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.[0]}
              sx={{
                borderRadius: "50px",
                "& .MuiInputLabel-root": { color: "rgb(157, 241, 232)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "rgba(5, 30, 52, 0.944)",
                  color: "rgb(157, 241, 232)",
                  "& fieldset": { borderColor: "rgb(157, 241, 232)" },
                  "&:hover fieldset": { borderColor: "rgb(220, 241, 232)" },
                },
              }}
            />
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              error={!!errors.password}
              sx={{
                "& .MuiInputLabel-root": { color: "rgb(157, 241, 232)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "rgba(5, 30, 52, 0.944)",
                  color: "rgb(157, 241, 232)",
                  "& fieldset": { borderColor: "rgb(157, 241, 232)" },
                  "&:hover fieldset": { borderColor: "rgb(220, 241, 232)" },
                },
              }}
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: "rgb(157, 241, 232)" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <Typography variant="caption" color="error">
                {errors.password?.[0]}
              </Typography>
            </FormControl>
            {isSignUp && (
              <FormControl
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.confirmPassword}
                sx={{
                  "& .MuiInputLabel-root": { color: "rgb(157, 241, 232)" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "rgba(5, 30, 52, 0.944)",
                    color: "rgb(157, 241, 232)",
                    "& fieldset": { borderColor: "rgb(157, 241, 232)" },
                    "&:hover fieldset": { borderColor: "rgb(220, 241, 232)" },
                  },
                }}
              >
                <InputLabel>Confirm Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "rgb(157, 241, 232)" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
                <Typography variant="caption" color="error">
                  {errors.confirmPassword?.[0]}
                </Typography>
              </FormControl>
            )}
          </>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1vw",
              borderRadius: "50px",
              backgroundColor: "rgb(0, 128, 128)",
              color: "white",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgb(0, 102, 102)")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgb(0, 128, 128)")
            }
          >
            {isLoggedIn ? "Logout" : isSignUp ? "Sign Up" : "Login"}
          </button>
        </Box>
      </form>
      {errors.api && (
        <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
          {typeof errors.api === "string" ? errors.api : JSON.stringify(errors.api)}
        </Typography>
      )}
      {!isLoggedIn && (
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mt: 3,
            color: "rgb(157, 241, 232)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setIsSignUp((prev) => !prev)}
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Typography>
      )}
    </Box>
  );
}

export default LoginForm;
