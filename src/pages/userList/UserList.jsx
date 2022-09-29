import React from 'react';
import "./UserList.css";
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, 
      username: 'Ram ', 
      avatar:"./image/img2.png",
      email:"ram@.gmail.com",
      status:"active",
      transaction:"$120.00",
   },
   { id: 2, 
    username: 'Ram  ', 
    avatar:"./image/img2.png",
    email:"ram@.gmail.com",
    status:"active",
    transaction:"$120.00",
 },
 { id: 3, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 4, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 5, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 6, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 7, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 8, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 9, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},
{ id: 10, 
  username: 'Ram ', 
  avatar:"./image/img2.png",
  email:"ram@.gmail.com",
  status:"active",
  transaction:"$120.00",
},

  ];
  
  return (
    <div className='userList'>
       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
