import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/core/styles';
import { ICountry } from '../main/interfaces';
import { styles, cardStyles } from './Cart.styles';

interface ICoronaCardProps {
  country: ICountry;
}

const CoronaCard: FC<ICoronaCardProps> = ({ country }: ICoronaCardProps) => {
  const { root } = makeStyles(styles)();
  const addCardStyles = makeStyles(cardStyles)();

  return (
    <Card className={addCardStyles.root}>
      <CardMedia
        className={root}
        component='img'
        image={`https://www.countryflags.io/${country.CountryCode}/flat/64.png`}
        alt='Country Flag'
        title='Country Flag'
        height='64'
        width='64'
      />
      <CardContent>
        <Typography variant='h5' component='h2'>
          {country.Country}
        </Typography>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccountBoxIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Total Cases'
            secondary={country.TotalConfirmed}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AirlineSeatIndividualSuiteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Deaths' secondary={country.TotalDeaths} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessibilityNewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Recovered'
            secondary={country.TotalRecovered}
          />
        </ListItem>
      </CardContent>
    </Card>
  );
};

export default CoronaCard;
