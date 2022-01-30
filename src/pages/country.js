import React, { useContext } from 'react';
import { Grid, CardMedia, Button, Typography } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import MainContext from '../context/main-context';
import MInfo from '../components/m-info';
import { useNavigate, useParams } from "react-router-dom";

const Country = () => {

    const { countryListContext } = useContext(MainContext);
    const navigate = useNavigate();
    const params = useParams();
    const goHome = () => {
        navigate("/");
    };

    let user = countryListContext && countryListContext.find(t0 => t0.alpha3Code == params.code);

    return (
        <Grid container spacing={2} mt={5} height={'auto'}  >
            <Grid container pl={10} >
                <Button variant="outlined" sx={{ boxShadow: 3 }} startIcon={<ArrowBack />} onClick={goHome}>
                    Back
                </Button>
            </Grid>
            { user && <Grid container spacing={2}>
                <Grid xs="12" md="6" p={10}>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={user.flags.png}
                    />
                </Grid>
                <Grid xs="12" md="6" p={10}>
                    <Grid item>
                        <Typography variant="h4" fontWeight="bold" gutterBottom lineHeight="3"  > {user.name}  </Typography>
                    </Grid>
                    <Grid container md="12">
                        <Grid item md="6" xs="12">

                            <MInfo title="Native Name" value={user.nativeName} />
                            <MInfo title="Population" value={user.population} />
                            <MInfo title="Region" value={user.region} />
                            <MInfo title="Sub Region" value={user.subregion} />
                            <MInfo title="Capital" value={user.capital} />
                        </Grid>
                        <Grid item md="6" xs="12" mt={{ xs: 2, md: 0 }} >
                            <MInfo title="Top Level Domain" value={user.topLevelDomain && user.topLevelDomain.join(', ')} />
                            <MInfo title="Currencies" value={user.currencies && user.currencies.map(t0 => t0.code).join(', ')} />
                            <MInfo title="Languages" value={user.languages && user.languages.map(t0 => t0.name).join(', ')} />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 6 }} spacing="2" >
                        <Grid item md="auto" xs="12"  >
                            <MInfo title="Border Countries" value="" />
                        </Grid>
                        <Grid item md="auto" xs="12"  >
                            {user.borders && user.borders.map(border =>
                            (<Typography variant="subtitle1" component="span"
                                sx={{ border: 1, p: 1, ml: { xs: 0, md: 2 } }}>  {border}  </Typography>)
                            )}


                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
            }

        </Grid >)
}
export default Country;

