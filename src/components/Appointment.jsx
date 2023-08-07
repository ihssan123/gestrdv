import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Appointment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const navigateTo = useNavigate();
  const token= localStorage.getItem('accessToken')
  useEffect(() => {
    fetchData();
  }, []);
  const contentStyles = {
    marginLeft: '400px',
    marginRight: '-80px',
  };
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/doc/doctors', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token
        },
      });

      setData(response.data);
      console.log(response)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
    <div style={contentStyles}>
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
          Appointment Booking
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
               Appointment Booking
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            You can easily book your appointment and track your request.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid  style={{marginTop:'-32px',color:'black',marginLeft:'-150px',marginRight:'-300px' ,width:'120vh'}} container spacing={4}>
  {data.map(doctor => (
    <Grid item key={doctor.id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image="https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1838&q=80"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {doctor.firstname} {doctor.lastname}
          </Typography>
          <Typography>
            {/* You can add more details about the doctor here */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigateTo('/reservation',{ state: { email: doctor.email } })}>
            Reservation
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
         
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </div>)}
    </div>
  );
}