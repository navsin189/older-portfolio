import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./App.css"

export default function SimplePaper(props) {
  return (
    <Box
    className={props.pr.group}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 180,
        //   height: 80,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      

      <Paper elevation={8} sx={{padding:2}} >{props.pr.name}</Paper>

    </Box>
  );
}