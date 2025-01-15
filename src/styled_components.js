import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'PT Serif', serif;
// font-family: 'Ubuntu', sans-serif;

// export const text_color = "#e0e0e0";
// export const divider_color = "#a5a5a5";
// export const background_color = "#010101"

export const text_color = "#010101";
export const divider_color = "#5b5b5b";
export const background_color = "#ffffff";

export const StyledWrapper = styled(motion.div)``;

export const StyledNavBar = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 0 8rem;
  color: ${text_color};
  min-height: 5rem;
  background-color: ${background_color};
  border-bottom: 1px solid ${divider_color};

  @media (max-width: 1000px) {
    padding: 0 1.6rem;
  }
`;

export const StyledBrandName = styled(motion.h1)`
  font-size: 2rem;
  display:flex;
  align-items:center;
  column-gap: 0.2rem;

  & > img{
    width:2.2rem;
    height:2.2rem;
  }



  @media (max-width: 1000px) {
    font-size: x-large;
  }
`;

export const StyledNavLinks = styled(motion.div)`
  display: flex;
  column-gap: 2.4rem;
 
  @media (max-width: 1000px) {
    /* font-size: x-large; */
    display: none;
  
  }
`;

export const StyledDrawerLink = styled(motion.a)`
  display:flex;
  align-items: center;
  padding:0.5rem 1rem;
  width:100%;
  text-decoration: none;
  color:#555555;
  background-color:#dddddd;
  border-radius:2px;
  & > svg {
    font-size:medium;
    margin-right: 0.2rem;
  }

`


export const StyledLink = styled(motion.a)`
display:flex;
align-items:center;
  color: #555555;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 0.07rem;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  font-size: large;
  
  & > svg {
    font-size:1.2rem;
    margin-right: 0.2rem;
  }

  &:active {
    color: inherit;
  }

  &::before {
    content: " ";
    background-color: ${text_color};
    transition: min-width 0.4s ease-in;
    min-width: 0;
    min-height: 0.1rem;
    position: absolute;
    bottom: -4px;
  }

  &:hover::before {
    min-width: 100%;
  }
`;

export const StyledPageWrapper = styled.div`
  background-color: ${(props) =>
    props.$background_color && props.$background_color};
  display: grid;
  align-content: center;
  justify-items: center;
  padding: 6rem 0;


  min-height: calc(100vh - 5rem);

  @media (min-height: 1400px) {
    border: 2px solid #808080;
    min-height: 75rem;
  }
  @media (max-width: 1000px) {
    padding: 10rem 0 4rem 0;
  }
`;

export const StyledHomePageContainer = styled.div`
  display: grid;
  padding: 0 10rem;
  overflow-x: hidden;
  

    

  grid-template-columns: 2.5fr 2fr;
  column-gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0;
  }

  /* border:2px solid red; */
`;

export const StyledHomePageItem = styled(motion.div)`
  color: ${text_color};
  padding: 1rem 2rem;
  padding-top:0.2rem;
  &:first-child {
    
    border-left: 5px solid ${text_color};
    @media (max-width: 1000px) {
      border-left: 0;
    }
  }

  &:last-child {
    z-index: 1;

    background-size: 150%;
    background-repeat: no-repeat;
    background-position: center;

    /* opacity: 0.7; */
    /* filter: blur(1px); */
    background-image: url(${(props) => props.$data_image_url ? props.$data_image_url : null});

    @media (max-width: 1000px) {
      min-height: 25rem;
    }
  }

  & > h1 {
    padding-bottom: 1rem;
    font-size: 3.2rem;
    font-weight: 800;
    font-family: Georgia, "Times New Roman", Times, serif;

    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }

  & > p {
    font-size: 1rem;
    line-height: 1.57rem;
    /* text-align: justify; */
  }

  & > p:last-of-type {
    padding-bottom: 1.8rem;
  }
`;

export const StyledCVButton = styled(motion.a)`
  background-color: inherit;
  text-decoration: none;
  color: ${text_color};
  padding: 0.7rem 1.2rem;
  border: 2px solid ${divider_color};
  border-radius: 5px;
`;

export const StyledPageDivider = styled(motion.hr)``;

export const StyledAboutPageWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  overflow-x: hidden;


  & > h1 {
    text-transform: uppercase;
    margin-bottom: 1.8rem;
    border-bottom: 3px solid #555555;

    /* border-right: 23rem; */
    padding-bottom: 0.5rem;
    color: #454545;
  }

  & > p {
    margin-bottom: 4rem;
    font-size: large;
    width: 70%;
    text-align: center;
    color: #555555;
    line-height: 1.8rem;

    @media (max-width: 1000px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export const StyledAboutPageContainer = styled(motion.div)`
  /* border:2px solid red; */
  display: grid;
  width: 75%;
  grid-template-columns: 5fr 8fr;
  column-gap: 3rem;
  row-gap: 3rem;

  @media (max-width: 1000px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const StyledAboutPageItem = styled(motion.div)`
  &:first-child {
    background-color: inherit;
    border-radius: 5px;
    background-position:bottom right;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    background-image: url(${(props) =>props.$data_image_url ? props.$data_image_url : null});
    @media (max-width: 1000px) {
      min-height: 25rem;
      background-size: 100% 100%;
    }
  }

  &:last-child {
    /* padding: 0.1rem 0; */
    /* border:2px solid red; */
    display: grid;
    align-content: center;
  }

  &:last-child > p:last-of-type {
    /* border:2px solid red; */
    line-height: 2rem !important;
  }

  &:last-child > span:first-child {
    font-size: 1.4rem;
    font-weight: 700;
    color: #454545;

    @media (max-width: 1000px) {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  &:last-child > span > h1 {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    margin-bottom: 1rem;
    color: ${text_color};

    @media (max-width: 1000px) {
      font-size: 1.8rem;
    }
  }
  &:last-child > p:nth-child(2) {
    /* font-size: 1.2rem; */
    font-size: large;

    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #454545;
    line-height: 1.7rem;

    @media (max-width: 1000px) {
      text-align: center;
    }
  }

  & > div {
    padding: 0.5rem 0;
    display: grid;
    row-gap: 0.5rem;
    font-size: 1.15rem;
    width: fit-content;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  & > div > p {
    padding: 0.36rem 0;
    /* width:fit-content; */
    border-bottom: 1px solid #aaaaaa;

    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

export const StyledContactPageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
  overflow-x: hidden;


  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2rem;
  }

  & > h1 {
    border-bottom: 3px solid #555555;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    color: #454545;
  }

  & > p {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    font-size: large;
    color: #555555;
    line-height: 1.88rem;
  }
`;

export const StyledGridWrapper = styled(motion.div)`
  padding: 0 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledGridItem = styled(motion.div)`
  padding: 4rem 2rem;
  width: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const StyledIframe = styled(motion.iframe)`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 3px;
`;

export const StyledForm = styled(motion.form)`
  & > h1 {
    margin-bottom: 1rem;
  }
`;

export const StyledFormFieldContainer = styled(motion.div)`
  display: grid;
  row-gap: 1.4rem;
`;
export const StyledFormField = styled(motion.div)`
  position: relative;
`;

export const StyledInputField = styled(motion.input)`
  border: 1.2px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  font-size: 1rem;
  background-color: #f1f0f0;
  resize: none;
  padding: 0.9rem 1rem;
  border-radius: 3px;
  outline: none;
`;

export const StyledError = styled(motion.small)`
  position: absolute;
  bottom: -1rem;
  left: 0;
  color: #ff0000;
`;

export const StyledButtonWrapper = styled(motion.div)`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  column-gap: 2rem;
  row-gap: 1.5rem;
`;

export const StyledButton = styled(motion.button)`
  outline: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  /* color:#fff; */
  /* background-color: #454545; */
  /* box-shadow: 0 0 5px rgba(0,0,0,0.4); */
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: 1.7px solid #555555;
`;

export const StyledSkillPageWrapper = styled(motion.div)`
  /* border:2px solid red; */
  display: flex;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media (max-width: 1000px) {
    width: 100%;
  }

  & > h1 {
    border-bottom: 3px solid #555555;
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 0.5rem;
    color: #454545;
  }

  & > p {
    width: 100%;
    text-align: center;
    margin-bottom: 5.2rem;
    font-size: large;
    color: #555555;
    line-height: 1.88rem;
  }
`;

export const StyledSkillGridWrapper = styled(motion.div)`
  padding: 0 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 4rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledProgressBar = styled(motion.div)`
  /* border:2px solid brown; */
`;

export const StyledProgressLabel = styled(motion.h3)`
  margin-bottom: 0.3rem;
  color: #454545;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: small;
  }

`;

export const StyledProgressBackground = styled(motion.div)`
  min-height: 0.8rem;
  border-radius: 5px;
  background-color: #d4d4d4;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const StyledProgressForground = styled(motion.div)`
  min-height: 0.8rem;
  width: ${(props) => (props.width ? `${props.width}%` : 0)};
  background-color: #555555;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  border-radius: 5px;
`;

export const StyledProgressIndicator = styled(motion.div)`
  position: absolute;
  right: -1rem;
  top: -1.8rem;
`;

export const StyledServicesPageWrapper = styled(motion.div)`
  /* border:2px solid red; */
  display: flex;
  justify-content: center;
  width: 85%;
  flex-wrap: wrap;
  /* padding:0 2rem; */
  /* border:2px solid red; */

  & > h1 {
    border-bottom: 3px solid #555555;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    color: #454545;
  }

  & > p {
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;
    font-size: large;
    color: #555555;
    line-height: 1.88rem;
  }
`;

export const StyledProductsGrid = styled(motion.div)`
  display: grid;
width:100%;
  column-gap: 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;
  /* border:2px solid green; */
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledCard = styled(motion.div)`
  border: 1.2px solid rgba(0, 0, 0, 0.3);
  /* width: 25rem; */
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in;

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyledCardImage = styled(motion.img)`
  height: 13rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0.5rem;
`;

export const StyledcardWrapper = styled(motion.div)`
  height: calc(100% - 11rem);
  position: relative;
  bottom: 4px;
  padding: 0.8rem;
  border-radius: 0 0 10px 10px;
  display: grid;
  row-gap: 0.8rem;
`;

export const StyledCardButton = styled(motion.div)`
  border: 2px solid #555555;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background-color: #555555;
  transition: all 0.3s ease-in;
  font-weight: 500;
`;

export const StyledCardDescription = styled(motion.div)`
  overflow: hidden;
  font-size: large;
  font-weight: 500;
  color: #555555;
  line-height: 1.2rem;
  text-transform: justify;
`;
