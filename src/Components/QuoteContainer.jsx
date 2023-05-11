import React from 'react'
import { Card, Button, Typography } from '@mui/material'

const QuoteContainer = ({quotes, handleReloadClick}) => {
  return (
    <>
      <Typography variant='h5' align='center' >
        Quotes
      </Typography>      
      {quotes.map((quote, index) => (
        <Card key={index} sx={{p: 2}}>
            <Typography marginBottom={3} variant='body1' align='left'>{quote.quote}</Typography>
            <Typography marginBottom={2} variant='body2' align='left'>Author: {quote.author}</Typography>
            <Typography variant='body2' align='left'>Category: {quote.category}</Typography>
        </Card>
      ))}
      <Button variant="contained" onClick={() => handleReloadClick()}>
        Load New
      </Button>
    </>
  );
}

export default QuoteContainer
