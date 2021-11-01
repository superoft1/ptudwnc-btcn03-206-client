import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


export default function ClassForm({onclick}) {

  const [open, setOpen] = React.useState(false);
  const [isSent, setIsSent] = React.useState(true);
  const [error, setError] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const initialValues = {
    classname: '',
    description: '',
    topic: '',
  }

  const validationSchema = Yup.object().shape({
    classname: Yup.string().min(3, "It's too short").required("Required"),
  });

  const onSubmit = (values, props) => {
    setIsSent(false);
    axios.post("http://localhost:3001/classes", values)
      .then(() => {
        setIsSent(true);
      })
      .catch(error => {
        setIsSent(true);
        setError(error);
    });
    props.resetForm();
    setOpen(false);
  }

  if (error) {
    alert(JSON.stringify(error.message), null, 2)
    setError('');
  } else if (!isSent) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress disableShrink />
      </Box>
    );
  }

  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Classroom
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Classroom</DialogTitle>
          <DialogContent>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
              <Form noValidate>
                <Grid container spacing={3}> 
                  <Grid item xs={12} style={{ marginTop: 10 }}>
                    <Field as={TextField}
                      required
                      id="classname"
                      name="classname"
                      fullWidth
                      error={props.errors.classname && props.touched.classname}
                      label="Title"
                      autoComplete="title"
                      helperText={<ErrorMessage name='classname' />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field as={TextField}
                      id="description"
                      name="description"
                      fullWidth
                      label="Description"
                      autoComplete="description"
                      helperText={<ErrorMessage name='description' />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field as={TextField}
                      id="topic"
                      name="topic"
                      fullWidth
                      label="Topic"
                      autoComplete="topic"
                      helperText={<ErrorMessage name='topic' />}
                    />
                  </Grid>

                  <DialogActions sx={{ ml: "auto"}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit' variant='contained' onClick={onclick}>Create</Button>
                  </DialogActions>
                </Grid>
      
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}