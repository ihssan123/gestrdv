import React from 'react';
import './ProfilePage.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import {
  MDBCol,
 
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function DocProfile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRDV, setdateRDV] = useState(null);
//const dateString = dateRDV.toISOString();
    const navigateTo = useNavigate();
    const token= localStorage.getItem('accessToken')
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/doc/Profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the bearer token
          },
        });
  
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    const rdv = {
      dateRDV:dateRDV
      
    };
    const handleAddRdv = async (event) => {
      event.preventDefault();
  
  console.log(rdv)
  
      try {
       
        const response = await axios.post('http://localhost:8080/api/v1/doc/rendezVous', rdv, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        });

        console.log( response);
        
       
        console.log("good")
        
  
       
        // You might want to redirect the user or show a success message here
      } catch (error) {
        console.error('Error', error);
        // Handle errors appropriately
      }
    };
    function formatDateToCustomFormat(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const milliseconds = date.getMilliseconds().toString().padStart(6, '0');
      
      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
      
      return formattedDate;
    }
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
    <div className="flex-container1">
    <div className="flex-container">
    <div>
   
        <MDBRow style={{marginTop:'100px',color:'black',marginLeft:'90px',marginRight:'-300px' ,width:'70vh'}}>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1"> </p>
              
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.firstname + "" +data.lastname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.phoneNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
               
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.adresse}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

           
          </MDBCol>
        </MDBRow>
        </div>
<div style={{marginTop:'250px',color:'black',marginLeft:'480px',marginRight:'-300px' ,width:'70vh'}}>


    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker  name="dateRDV"
      label="Basic date time picker"
      value={dateRDV}
      onChange={(newDate) => {
        console.log(formatDateToCustomFormat(new Date(""+newDate.$d)));
        setdateRDV(formatDateToCustomFormat(new Date(""+newDate.$d)))
      }
      } />
      </DemoContainer>
    </LocalizationProvider>
 
<div style={{marginTop:'30px',color:'black',marginLeft:'2px',marginRight:'-200px' ,width:'70vh'}} ><Button variant="contained" endIcon={<SendIcon />} onClick={handleAddRdv}>
  Add
</Button>
<div style={{marginTop:'30px',marginLeft:'2px',marginRight:'-200px' }}>

<Button variant="contained" disableElevation onClick={() => navigateTo('/Demand')} >
Patient Requests
    </Button>
</div>
</div>
  
</div>

</div>

        </div>)}
        </div>
  );
}