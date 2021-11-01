import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress'
import axios from 'axios';

function ClassList () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/classes")
        .then(res => {
          setIsLoaded(true);
          setClasses(res.data);
        })
        .catch(error => {
          setIsLoaded(true);
          setError(error);
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        );
    } else {
        return (
        <Grid container spacing={4}>
            {classes.map((classroom) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}
                  key={classroom.id}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image='https://image.freepik.com/free-psd/abstract-background-with-opened-book_23-2149085907.jpg'
                    alt="classroom"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {classroom.ClassName}
                    </Typography>
                    <Typography>
                      {classroom.Description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
        );
    }
}

export default ClassList;