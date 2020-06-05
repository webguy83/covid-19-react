import React from 'react';
import { FC } from 'react';
import { Typography, Box } from '@material-ui/core';

const Header: FC = () => {
  return (
    <Box component='header' color='white' bgcolor='darkblue' textAlign='center'>
      <Typography variant='h1'>COVID 19</Typography>
    </Box>
  );
};

export default Header;
