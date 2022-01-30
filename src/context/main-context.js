import React, { useState, createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";

const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [countryList, setCountryList] = useState([]);
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const value = {
        theme,
        toggleTheme,
        countryListContext: countryList,
        setCountryListContext: setCountryList
    }
    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            primary: {
                main: common.white,
                light: common.white,
                dark: 'red'
            },
            background: {
                ...(mode === 'light'
                    ? {
                        default: '#fafafa',
                        paper: '#fafafa'
                    }
                    : {
                        default: '#202d36',
                        paper: '#202d36'
                    }),
            },
        }
        , components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        ...(mode == 'light' ? { color: common.black } : { color: common.white })
                    },

                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: mode === 'dark' ? '#202d36' : '#fafafa'
                    }
                },
            }
        }
    });

    const themeValue = useMemo(() => {
        return createTheme(getDesignTokens(theme))
    }, [theme]);

    return <MainContext.Provider value={value}>
        <ThemeProvider theme={themeValue}  >
            <CssBaseline />
            {children}
        </ThemeProvider>
    </MainContext.Provider>
}

export default MainContext