import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Add = ({user}) => {
  
  const [form,setForm] = useState({
    UserId: '',
    Name: '',
    Email: '',
    ContactNumber:0
  });
  let submitForm = () => {
    console.log(form);
  }
  let valueUpdate=(e)=>{
    //console.log(e)
    
    setForm({...form,[e.target.name]: e.target.value})
    
  }

  return (
   <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidat
      autoComplete="off"
    >
      <TextField required id="outlined-basic" label="User Id" name="UserId" value={form.UserId} onChange={valueUpdate} />
      <TextField required id="outlined-basic" label="Name" name="Name" value={form.Name} onChange={valueUpdate} />
      <TextField required id="outlined-basic" label="Email" name="Email" value={form.Email} onChange={valueUpdate} />
      <TextField required id="outlined-basic" label="Contact Number" name="ContactNumber" value={form.ContactNumber} onChange={valueUpdate} />
      <Button variant="contained" onClick={submitForm}>Submit</Button>
    </Box>
  )
}

export default Add