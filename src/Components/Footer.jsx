import { Typography } from '@mui/material'
import React from 'react'

const Footer = ({createdBy}) => {
  return (
    <Typography variant="subtitle1" align="center">
      Created by: {createdBy}
    </Typography>
  );
}

export default Footer
