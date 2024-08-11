
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const User = ({ product = {} }) => {
  const [form, setForm] = useState({
    Email: product.Email || '',
    Password: product.Password || '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!form.Email || !form.Password) {
      setError('All fields are required.');
      return;
    }

    
    setError('');

   
    console.log('Form Submitted:', form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor: '#f4f4f4',
        p: 2,
        borderRadius: '8px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} 
    >
      <br />
      <div>
        <TextField
          required
          id="email"
          label="Email"
          name="Email"
          type="email"
          value={form.Email}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="password"
          label="Password"
          name="Password"
          type="password"
          value={form.Password}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
        )}

        <Button
          type="submit" 
          variant="contained"
          sx={{
            backgroundColor: '#008080',
            '&:hover': {
              backgroundColor: '#004d40',
            },
          }}
        >
          Login as User
        </Button>
      </div>
    </Box>
  );
};

export default User;
