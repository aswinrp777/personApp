import React,{useState,useEffect}from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
function Home() {
  const [users,setUsers] = useState([]);
  //using usseEffect to load data in the biginning
  useEffect(() => {
    axios.get('http://localhost:3000/users').then((res)=>{
      setUsers(res.data);
    }).catch((error)=>{
      console.log("Error while fetching the data")
    })
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users) => (
            <TableRow
              key={users.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {users.userId}
              </TableCell>
              <TableCell align="right">{users.userName}</TableCell>
              <TableCell align="right">{users.email}</TableCell>
              <TableCell align="right">{users.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  );
}

export default Home