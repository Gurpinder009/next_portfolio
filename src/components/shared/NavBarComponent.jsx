import { StyledNavBar, StyledBrandName, StyledNavLinks, StyledLink } from "../../styled_components";
import { FadeAnimationVariant } from "../../FrammerMotionAnimations"
import styled from "styled-components";
import { Menu, Home, Person, Phone, DesignServices, MiscellaneousServices } from '@mui/icons-material'

const MenuIcon = styled.button`
  cursor: pointer;
  display:none;
  border:0;
  background-color:inherit;
  @media (max-width:1000px){
    border-radius:5px;
    display:initial;
  }


`


export default function NavBarComponent({ isOpen, setIsOpen }) {
  return (
    <StyledNavBar variants={FadeAnimationVariant} initial="hidden" whileInView="visible">
      <StyledBrandName> <img src={"favicon1.ico"} alt="" />GSDesigns</StyledBrandName>
      <StyledNavLinks>
        <StyledLink  href="#home"><Home /> Home</StyledLink>
        <StyledLink  href="#about"><Person /> About</StyledLink>
        <StyledLink  href="#skills"><DesignServices /> Skills</StyledLink>
        <StyledLink  href="#services"><MiscellaneousServices />Services</StyledLink>
        <StyledLink  href="#contact"><Phone /> Contact</StyledLink>
      </StyledNavLinks>
      <MenuIcon onClick={() => setIsOpen((prev) => !prev)}><Menu /></MenuIcon>
    </StyledNavBar>
  );
}
