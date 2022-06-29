import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import loader from './assets/loader.gif';
import PhoneService from './services/PhoneService';
import './App.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import AddContacts from './AddContacts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const App = () => {
  const [showForm,setShowForm]=useState(false)
  const columns= [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Contact Name', width: 130 },
    { field: 'email', headerName: 'Emal', width: 130 },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 90,
    },
    {
      field: 'website',
      headerName: 'Website',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const dispatch = useDispatch();

  const usersInfo = useSelector((state) => state.root.contactsData);


   useEffect(() => {
        PhoneService.loadUsers(dispatch);
    }, [dispatch])



  
  const errorContainer = () => {
    return <div>ERROR IN API</div>;
  }
  const showLoader = () => {
    return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;
  }
const showContactForm=()=>{
  setShowForm(true);
}
const onFormSubmit=(values)=>{
  console.log(values)
}
  const renderData = (usersInfo) => {
    return usersInfo.error ? errorContainer():
    <Box m={2} pt={3}>
      
      <Container maxWidth="md">
      <Grid container spacing={2}>
       
        <Grid item xs={8}>
          <Item>
          <Typography variant="h5" component="div" gutterBottom>
            Contact Details
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <AddContacts dataLength={usersInfo.contactList.length} isOpen={showForm} onSubmit={onFormSubmit}/></Item>
        </Grid>
       
      </Grid>
     
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={usersInfo.contactList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
       
      </Container>
    </Box>

  }

  return (    
    usersInfo.loading ? showLoader() : renderData(usersInfo)
  )
}

export default App;