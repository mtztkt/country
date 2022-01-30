
import Country from '../pages/country';
import CountryList from '../pages/country-list';

export const RouteList = [
    { path: '/', element: <CountryList /> },
    { path: '/country-:code', element: <Country /> }
]