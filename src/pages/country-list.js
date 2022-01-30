import React, { useState, useEffect, useContext, useRef } from 'react';
import { Grid, Card, Box, CircularProgress, CardMedia, CardContent, CardActionArea, IconButton, InputLabel, TextField, InputAdornment, Typography, FormControl, Select, MenuItem, textFieldClasses } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import MainContext from '../context/main-context';
import callApi from '../utility/service-helper';
import { RegionList } from '../data/constants';
import MCountryItem from '../components/m-country-item';

//@mzk servisden dönen data tipi bir class ya da interface yapısıyla alınacak. 
const CountryList = () => {
    let navigate = useNavigate();

    const searchText = useRef("");
    const region = useRef("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [countryListForFilter, setCountryListForFilter] = useState([]);
    const { countryListContext, setCountryListContext } = useContext(MainContext);

    const search = () => {
        let filteredList = countryList.filter(country => (searchText.current.length == 0 ||
            country.name.toLowerCase().indexOf(searchText.current) > -1) && (region.current.length == 0 || country.region == region.current));
        setCountryListForFilter(filteredList);
    }

    const onSearchChange = (event) => {
        searchText.current = event.target.value;
        search();
    }

    const onRegionChange = (event) => {
        region.current = event.target.value;
        search();
    }

    const onCountryClick = (alpha3Code, user) => {
        navigate(`/country-${alpha3Code}`, { state: { id: user } });
    }


    useEffect(() => {
        if (countryListContext.length == 0) {
            callApi('https://restcountries.com/v2/all/').then(
                (data) => {
                    setIsLoaded(true);
                    setCountryList(data);
                    setCountryListForFilter(data);
                    setCountryListContext(data);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        } else {
            setIsLoaded(true);
            setCountryListForFilter(countryListContext)
            setCountryList(countryListContext)
        }
    }, [])

    console.log(countryList);

    if (!isLoaded) {
        return <Box sx={{ display: 'flex' }} >
            <CircularProgress />
        </Box>
    } else {
        return (
            <Grid>
                <Grid justifyContent="space-between"
                    container>
                    <Grid item>
                        <TextField sx={{ m: 6, width: 300, mt: 3 }}
                            placeholder="Search for a country"
                            onChange={onSearchChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl sx={{ m: 6, width: 300, mt: 3 }}>
                            <InputLabel id="demo-simple-select-standard-label" sx={{
                                "&.Mui-focused": {
                                    color: (theme) => { return "black" }

                                }
                            }}>Filter by Region</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Region"
                                sx={{ borderColor: 'blue', color: '#bca' }}
                                placeholder={"Filter by Region"}
                                onChange={onRegionChange}
                            >
                                {RegionList.map((region) => (
                                    <MenuItem value={region}>{region}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    spacing={2} mt={5} >

                    {countryListForFilter.map(countryData => (
                        <MCountryItem country={countryData} onCountryClick={onCountryClick} />
                    ))}
                </Grid>
            </Grid >
        )
    }


}
export default CountryList;