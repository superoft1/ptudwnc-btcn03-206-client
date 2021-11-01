import React from "react";
import AppBar from '@mui/material/AppBar';
import ClassIcon from '@mui/icons-material/Class';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// components
import ClassList from '../components/classes/ClassList';
import PopupCreate from '../components/classes/PopupCreate';


const theme = createTheme();

export default function ClassLayout() {

  const hanndleReload = () => {
    window.location.reload();
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ClassIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Classroom
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
              Welcom User
            </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
              <PopupCreate onclick={hanndleReload}/>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <ClassList />
        </Container>
      </main>
    </ThemeProvider>
  );
}
