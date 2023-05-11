import { Typography, Grid, Link } from '@mui/material'
import React from 'react'

const Footer = ({createdBy, source}) => {
  return (
    <Grid container justifyContent="center">
        <Grid item xs={6}>
        <Typography variant="body2" align="center">
            Created by {createdBy}
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="body2" align='center'>
        <Link href={source}  align='center'>
            Source Code
        </Link>
        </Typography>
        </Grid>
    </Grid>
  );
}

export default Footer
