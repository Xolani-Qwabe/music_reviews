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
import { faGoogle, faFacebook, faApple, faTiktok, faTwitter, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { z } from "zod";

// Validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log({ email, password });
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
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
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
            Login
          </button>
        </Box>
      </form>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mt: 3,
          color: "rgb(157, 241, 232)",
          fontWeight: "bold",
        }}
      >
        Or Login With
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 30, color: "rgb(157, 241, 232)" }} />
        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 30, color: "rgb(157, 241, 232)" }} />
        <FontAwesomeIcon icon={faApple} style={{ fontSize: 30, color: "rgb(157, 241, 232)" }} />
        <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 30, color: "rgb(157, 241, 232)" }} />
        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 30, color: "rgb(157, 241, 232)" }} />
        <FontAwesomeIcon icon={faSpotify} style={{ fontSize: 30, color: "rgb(157, 241, 232)" }} />
      </Box>
    </Box>
  );
}

export default LoginForm;
