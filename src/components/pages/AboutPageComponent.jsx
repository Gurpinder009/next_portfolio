import { StyledPageWrapper, StyledAboutPageWrapper, StyledAboutPageContainer, StyledAboutPageItem } from "../../styled_components";

import { FadeRightAnimationVariant,FadeLeftAnimationVariant } from "../../FrammerMotionAnimations";


export default  function AboutMePageComponent() {
    return <StyledPageWrapper $background_color={"#E1E5EA"} >
        <StyledAboutPageWrapper>
            <h1>About Me</h1>
            <p>Every bit of detail that you may require about me.</p>
            <StyledAboutPageContainer>
                <StyledAboutPageItem $data_image_url={"/download2.jpg"} variants={FadeLeftAnimationVariant} initial="hidden" whileInView={"visible"} />
                <StyledAboutPageItem variants={FadeRightAnimationVariant} initial="hidden" whileInView={"visible"}>

                    <span>I&apos;M <h1>Gurpinder Singh Grewal</h1></span>

                    <p>A bachelor degree holder from <b> GURU NANAK DEV UNIVERSITY AMRITSAR</b>, currently I am freelancing as <b>React Developer</b> at platforms like fiverr and upwork. During my studies I have learnt alot of programming languages such as Java, Python and Javascript etc.</p>
                    <div>

                        <p><b>EMAIL ADDRESS : </b> gurpinders1511@gmail.com</p>
                        <p><b>Phone Number : </b>+1 7788623249</p>
                        <p><b>Address : </b> 14485 88A AVENUE SURREY, BC</p>
                    </div>

                </StyledAboutPageItem>
            </StyledAboutPageContainer>
        </StyledAboutPageWrapper>
    </StyledPageWrapper>
}


