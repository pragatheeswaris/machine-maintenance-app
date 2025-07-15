import React, { useState } from 'react';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate here
    // For demo purposes, we'll just log in with any credentials
    login({
      email: formData.email,
      role: formData.email.includes('admin') ? 'admin' : 
           formData.email.includes('supervisor') ? 'supervisor' : 
           formData.email.includes('tech') ? 'technician' : 'viewer'
    });
    navigate('/dashboard');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor={colors.primary[400]}
    >
      <Box
        width="400px"
        p="30px"
        borderRadius="8px"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h2"
          color={colors.greenAccent[500]}
          fontWeight="bold"
          textAlign="center"
          mb="20px"
        >
          COTTON FAB
        </Typography>
        
        <Typography
          variant="h4"
          color={colors.grey[100]}
          textAlign="center"
          mb="30px"
        >
          Machine Monitoring System
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box mb="20px">
            <Typography variant="h5" color={colors.grey[100]} mb="5px">
              Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: colors.grey[100],
                  },
                  "&:hover fieldset": {
                    borderColor: colors.greenAccent[500],
                  },
                },
                "& .MuiInputBase-input": {
                  color: colors.grey[100],
                },
              }}
            />
          </Box>

          <Box mb="30px">
            <Typography variant="h5" color={colors.grey[100]} mb="5px">
              Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: colors.grey[100],
                  },
                  "&:hover fieldset": {
                    borderColor: colors.greenAccent[500],
                  },
                },
                "& .MuiInputBase-input": {
                  color: colors.grey[100],
                },
              }}
            />
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: colors.grey[100],
              p: "10px",
              "&:hover": {
                backgroundColor: colors.greenAccent[600],
              },
            }}
          >
            Login
          </Button>
        </form>

        <Box mt="20px" textAlign="center">
          <Typography variant="body1" color={colors.grey[100]}>
            Demo credentials: admin@cottonfab.com / supervisor@cottonfab.com / tech@cottonfab.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;