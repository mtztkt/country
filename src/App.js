import './App.css';
import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Card } from '@mui/material';
import ThemeSwitcher from './context/theme-switcher';
import { MainContextProvider } from './context/main-context'

import React from 'react';
import { RouteList } from './data/routes';

function App() {
  return (

    <MainContextProvider  >
      <Card sx={{ height: '100%' }}>
        <header>
          <AppBar position="static"   >
            <Toolbar>
              <Grid justifyContent="space-between" container>
                <Grid item>
                  <Typography variant="h6" component="div" ml={6}>
                    Where in the world?
                  </Typography>
                </Grid>
                <Grid item>
                  <ThemeSwitcher />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </header>
        <main >
          <BrowserRouter>
            <Routes>
              {RouteList.map((route) => {
                return <Route path={route.path} element={route.element} />
              })}
            </Routes>
          </BrowserRouter>
        </main>
      </Card >
    </MainContextProvider>


  );
}
export default App;


