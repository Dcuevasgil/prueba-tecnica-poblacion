import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          World Population
        </Typography>
        <Box>
          {/* Botón global */}
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              '&:hover': {
                color: '#000000', 
              },
            }}
          >
            Global
          </Button>
          {/* Botones de los continentes */}
          {continents.map((continent) => (
            <Button
              key={continent}
              color="inherit"
              component={Link}
              to={`/continent/${continent}`}
              sx={{
                '&:hover': {
                  color: '#000000', 
                },
              }}
            >
              {continent}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
