"use client"

import { FadeRightInvertAnimationVariant,FadeLeftAnimationVariant,ButtonHoverEffect } from "../../FrammerMotionAnimations";
import { StyledPageWrapper, StyledHomePageContainer, StyledHomePageItem, background_color, StyledCVButton } from "../../styled_components";


// export default function HomePageComponent() {
//     return <StyledPageWrapper background_color={background_color}>
//         <StyledHomePageContainer>
//                 <StyledHomePageItem variants={FadeLeftAnimationVariant} initial="hidden" whileInView={"visible"}>
//                     <p>Hello, my name is </p>
//                     <h1>Gurpinder <br /> Singh Grewal</h1>
//                     <p>I am a Web Developer, currently working as freelancer for local community. For more information regarding me and my work look at my <b>LinkedIn</b> and <b>Github</b> profiles. you can even stay in touch with me using popular social media platforms, links given below.</p>
//                     <StyledCVButton  variants={ButtonHoverEffect} whileHover={"hover"} href="CV.pdf" download={true} >Download CV</StyledCVButton>
//                 </StyledHomePageItem>
//                 <StyledHomePageItem data_image_url={"/arrow_left2.jpg"}   variants={FadeRightInvertAnimationVariant} initial="hidden" whileInView={"visible"}/>
//         </StyledHomePageContainer>



//     </StyledPageWrapper>
// }


export default function HomePageComponent() {
    return <StyledPageWrapper $background_color={background_color}>
        <StyledHomePageContainer>
                <StyledHomePageItem variants={FadeLeftAnimationVariant} initial="hidden" whileInView={"visible"}>
                    <p>Hello, my name is </p>
                    <h1>Gurpinder <br /> Singh Grewal</h1>
                    <p>I am a Software Developer, currently working as freelancer for local community. For more information regarding me and my work look at my <b>LinkedIn</b> and <b>Github</b> profiles. you can even stay in touch with me using popular social media platforms, links given below.</p>
                    <StyledCVButton  variants={ButtonHoverEffect} whileHover={"hover"} href="GurpinderSinghResume.pdf" download={true} >Download My Resume</StyledCVButton>
                </StyledHomePageItem>
                <StyledHomePageItem $data_image_url={"/arrow_left2.jpg"}   variants={FadeRightInvertAnimationVariant} initial="hidden" whileInView={"visible"}/>
        </StyledHomePageContainer>
    </StyledPageWrapper>
}