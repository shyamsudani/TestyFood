import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
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
                Welcome To My Resturent
            </Typography>
            <p>
            Before writing a business plan, it is important to understand its fundamentals.It serves as a roadmap for starting and running your restaurant, making it easy for outside parties, such as investors, 
            to understand your objectives, vision, and plan of action for your restaurant.
            The length and level of detail of business plans vary, ranging from brief synopses to large papers. Investors can benefit from clear insights and additional information provided by beginning with a concise plan and working their way up to a detailed one.
            In short, a thorough description of the resources allocated to the success of your restaurant should be included in your business plan.
            </p>
            <br/>
            <p>
            Before writing a business plan, it is important to understand its fundamentals.It serves as a roadmap for starting and running your restaurant, making it easy for outside parties, such as investors, 
            to understand your objectives, vision, and plan of action for your restaurant.
            The length and level of detail of business plans vary, ranging from brief synopses to large papers. Investors can benefit from clear insights and additional information provided by beginning with a concise plan and working their way up to a detailed one.
            In short, a thorough description of the resources allocated to the success of your restaurant should be included in your business plan.
            </p>
           </Box>
        </Layout>
    )
}

export default About
