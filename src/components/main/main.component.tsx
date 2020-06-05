import React, { FC, useState, useEffect, ChangeEvent, memo } from 'react';
import { ICountry, ICovidData } from './interfaces';
import Card from '../Card/Card.component';
import {
  Grid,
  makeStyles,
  TextField,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { styles } from './main.styles';

const Home: FC = () => {
  const [covidData, setCovidData] = useState<ICovidData | null>(null);
  const [letters, setLetters] = useState('');
  const { item, root } = makeStyles(styles)();
  let countries: ICountry[] = [];

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((data: ICovidData) => {
        setCovidData(data);
      });
  }, []);

  if (covidData) {
    countries = covidData.Countries.sort((a: ICountry, b: ICountry) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
  }

  const makeCards = (countries: ICountry[]): JSX.Element[] => {
    return countries
      .filter((c) => {
        const searchedLetters = letters.toLowerCase();
        const cutCountry = c.Country.substring(
          0,
          searchedLetters.length
        ).toLowerCase();
        return cutCountry === searchedLetters;
      })
      .map((country: ICountry, i: number) => {
        return (
          <Grid className={item} key={i} item>
            <Card country={country} />
          </Grid>
        );
      });
  };

  const onCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLetters(e.target.value);
  };

  return (
    <Box
      className={root}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <TextField
        id='outlined-basic'
        label='Search for country'
        variant='outlined'
        onChange={(e: ChangeEvent<HTMLInputElement>) => onCountryChange(e)}
      />
      <Grid className={root} justify='center' container spacing={2}>
        {countries.length > 0 && covidData ? (
          makeCards(countries)
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Box>
  );
};

export default memo(Home);
