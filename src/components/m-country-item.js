import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';
import { numberToStringWithSeperator } from '../utility/numeric-helper';
import MInfo from './m-info';

const MCountryItem = (props) => {
    const { country, onCountryClick } = props;

    return (

        <Grid item xs={12} md={3} >
            <Card sx={{ m: 5 }}>
                <CardActionArea onClick={() => { onCountryClick(country.alpha3Code, country) }}>
                    <CardMedia
                        component="img"
                        image={country.flags.png}
                        width={'100%'}
                    />
                    <CardContent>
                        <Typography variant="h6" component="span" fontWeight="bold" gutterBottom lineHeight="3"  >  {country.name} </Typography>
                        <MInfo title={"Population"} value={numberToStringWithSeperator(country.population)} />
                        <MInfo title={"Region"} value={country.region} />
                        <MInfo title={"Capital"} value={country.capital} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )



}

export default MCountryItem;