import React from 'react';
import { Grid, Typography } from '@mui/material'
const MInfo = (props) => {

    return <Grid item lineHeight="2">
        <Typography variant="subtitle2" component="span" fontWeight="bold" {...props.titleProps}  >  {props.title}: </Typography>
        <Typography variant="body2" component="span" {...props.valueProps} >   {props.value}  </Typography>
    </Grid>

}

export default MInfo;