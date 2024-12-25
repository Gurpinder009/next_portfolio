
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React from 'react'
import { styled } from 'styled-components'

export const StyledFooter = styled(motion.footer)`
    /* border:2px solid red; */
    display:grid;
    justify-content:center;
    align-content:center;
    min-height: 10rem;
    background-color:#E1E5EA;
    row-gap:1rem;

    & > div{
        display:flex;
        font-size: x-large;
        justify-content:center;
        column-gap: 1rem;
      }
      & > div > a{
        font-size: x-large;
        text-decoration: none;
        color:#555555;
    }

    & > div > a:hover{
      color:#343eb6;
    }

    
`



export default function FooterComponent() {
  return (
    <StyledFooter>
     <div>
     <a style={{textDecoration:"none"}} href="https://instagram.com/gsdesigns009?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"> <Instagram/> </a>
     <a style={{textDecoration:"none"}} href="https://github.com/Gurpinder009"><GitHub/></a>
     <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/gurpinder-singh-b94022234"><LinkedIn/></a>

     </div>
     <small>copyright @gsdesgins 2023</small>
    </StyledFooter>
  )
}

