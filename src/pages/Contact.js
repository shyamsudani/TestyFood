import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const Contact = () => {
  return (
    
      <Layout>
        
        <Box sx={{
          my:15 ,
          textAlign: 'center',
          p:2,
          "& h4": {
              fontWeight: 'bold',
              my:2,
              fontSize: '2rem',
          },
          "& p": {
              textAlign:"justify",
          },
          "@media (max-width:600px)": {
              mt:0,
              "& h4":{
                  fontSize: '1rem',
              },
          }
        }}>
          <Typography variant='h4'>
            Contact My Resturent
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            padding: '0 90px',
            "& input": {
                width: '100%',
                padding: 5,
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
            },
            "& textarea": {
                width: '100%',
                padding: 5,
                border: 'none',
                borderBottom: '1px solid black',
                outline: 'none',
            },
            "& button": {
                width: '100%',
                padding: 2,
                marginTop: 9, 
                borderRadius: 5,
                border: 'none',
                outline: 'none',
                background: '#000',
                color: '#fff',
                cursor: 'pointer',
            },
            "& button:hover": {
                background: '#fff',
                color: '#000',
            },
          }}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder='Mobile Number' />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </Box>
        </Box>
      </Layout>
    
  )
}

export default Contact
