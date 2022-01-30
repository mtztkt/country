import React, { useContext } from 'react'
import MainContext from './main-context';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(MainContext)

    return (<div>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {theme === 'dark' ? < LightModeOutlinedIcon /> : <NightlightRoundOutlinedIcon />}
        </IconButton>
        {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </div>)
}

export default ThemeSwitcher