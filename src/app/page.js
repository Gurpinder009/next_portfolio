"use client"
import React from "react";
import {useState} from "react";
import { StyledPageDivider, StyledWrapper } from "../styled_components";
import NavBarComponent from "../components/shared/NavBarComponent";
import HomePageComponent from "../components/pages/HomePageComponent";
import AboutMePageComponent from "../components/pages/AboutPageComponent";
import SkillsPageComponent from "../components/pages/SkillsPageComponent";
import ContactPageComponent from "../components/pages/ContactPageComponent";
import ServicesPageComponent from "../components/pages/ServicesPageComponent";
import FooterComponent from "../components/shared/FooterComponent";
import DrawerComponent from "@/components/shared/DrawerComponent";

export default function App() {
  const [isOpen,setIsOpen] = useState(false);
  
  return (
    <StyledWrapper >
      <NavBarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <DrawerComponent isOpen={isOpen} setIsOpen={setIsOpen}  />
      <a name="home" href="/" style={{opacity:0,position:"absolute"}}>sd</a>
      <HomePageComponent />
      <StyledPageDivider />
      <a name="about" href="/" style={{opacity:0,position:"absolute"}}>sd</a>
      <AboutMePageComponent />
      <StyledPageDivider />
      <a name="skills" href="/" style={{opacity:0,position:"absolute"}}>sd</a>
      <SkillsPageComponent />
      <StyledPageDivider />
      <a name="services" href="/" style={{opacity:0,position:"absolute"}}>sd</a>
      <ServicesPageComponent />
      <StyledPageDivider />
      <a name="contact" href="/" style={{opacity:0,position:"absolute"}}>sd</a>
      <ContactPageComponent />
      <StyledPageDivider />
      <FooterComponent />
    
    </StyledWrapper>
  );
}

