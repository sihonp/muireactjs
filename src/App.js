import React, { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from './routes';
import { themes } from './themes'

const App = () => {
  const [mode, setMode] = useState('light');
  const [open, setOpen] = useState(false);
  const ColorModeContext = React.createContext();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themes(mode)), [mode]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Routes
         toggleDrawer={toggleDrawer}
          mode={mode}
          setMode={setMode}
          open={open}
          setOpen={setOpen}
          
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App