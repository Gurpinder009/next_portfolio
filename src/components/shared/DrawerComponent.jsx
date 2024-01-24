import React from 'react';
import styled from "styled-components";
import { StyledDrawerLink } from '@/styled_components';
import { motion } from 'framer-motion';
import {  Home, Person, Phone, DesignServices, MiscellaneousServices } from '@mui/icons-material'


const StyledDrawer = styled(motion.div)`
display:grid;
align-content:start;
row-gap:0.5rem;

    position:fixed;
    height:100vw;
    padding:0.3rem ;
    top:0;
    left:0;
    overflow:hidden;
    box-sizing:border-box;
    z-index:100;
         width:12rem;
    
    background-color:white;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);


    transition:width 0.6s ease-in,opacity 1s ease-in;
    @media (min-width:1000px){
  width:0;
  }
    
`;

const animation = {
    "hidden":{
        // width:0,
        left:"-18rem"
    },"show":{
        // width:"12rem",
        left:0
    }
}




export default function DrawerComponent({ isOpen,setIsOpen}) {
    return (
        <StyledDrawer variants={animation} initial="hidden" animate={isOpen?"show":"hidden"} >

          <StyledDrawerLink onClick={()=>setIsOpen((prev)=>!prev)} href="#home"><Home/>Home</StyledDrawerLink>
          <StyledDrawerLink onClick={()=>setIsOpen((prev)=>!prev)} href="#about"><Person/>About</StyledDrawerLink>
          <StyledDrawerLink onClick={()=>setIsOpen((prev)=>!prev)} href="#skills"><DesignServices/>Skills</StyledDrawerLink>
          <StyledDrawerLink onClick={()=>setIsOpen((prev)=>!prev)} href="#services"><MiscellaneousServices/>Services</StyledDrawerLink>
          <StyledDrawerLink onClick={()=>setIsOpen((prev)=>!prev)} href="#contact"><Phone/>Contact</StyledDrawerLink>
      
        </StyledDrawer>
    )
}



