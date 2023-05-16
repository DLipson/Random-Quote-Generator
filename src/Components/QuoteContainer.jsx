import React from 'react'
import { Card, Button, Typography, Skeleton } from '@mui/material'

const QuoteContainer = ({quotes, loading, handleReloadClick, count}) => {
    const MAX_SKELETONS_TO_DISPLAY = 2;
  return (
    <>
      {loading
        ? Array.from(new Array(count < MAX_SKELETONS_TO_DISPLAY ? count : MAX_SKELETONS_TO_DISPLAY )).map(() => (
            <Skeleton variant="rounded" animation="wave" height={150} />
          ))
        : (quotes.length !== 0 ? quotes.map((quote, index) => (
            <Card key={index} sx={{ p: 2 }}>
              <Typography marginBottom={3} variant="body1" align="left">
                {quote.quote}
              </Typography>
              <Typography marginBottom={2} variant="body2" align="left">
                Author: {quote.author}
              </Typography>
              <Typography variant="body2" align="left">
                Category: {quote.category}
              </Typography>
            </Card>
          )) : <Typography variant="body1" align="center">No quotes found</Typography>)}
      <Button variant="contained" onClick={() => handleReloadClick()}>
        Load New
      </Button>
    </>
  );
}

export default QuoteContainer
