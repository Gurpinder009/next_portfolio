import { StyledPageWrapper, background_color,StyledSkillGridWrapper,StyledSkillPageWrapper,StyledProgressBar,StyledProgressLabel,StyledProgressBackground,StyledProgressForground,StyledProgressIndicator } from "../../styled_components";
import { WidthAnimationVariant,FadeLeftAnimationVariant } from "../../FrammerMotionAnimations";

export default function SkillsPageComponent() {
  return <StyledPageWrapper $background_color={background_color} >

    <StyledSkillPageWrapper>
      <h1> MY SKILLS  </h1>
      <p>I acquired many skills in the fields of programming and design during and after my college as given below.</p>
      <StyledSkillGridWrapper>

        <ProgressComponent width={80} label={"HTML/CSS/javascript"} />
        <ProgressComponent width={85} label={"React"} />
        <ProgressComponent width={60} label={"Node js"} />
        <ProgressComponent width={70} label={"golang"} />
        <ProgressComponent width={65} label={"flutter/dart"} />
        <ProgressComponent width={85} label={"Responsive Design"} />
        <ProgressComponent width={70} label={"FIGma"} />
        <ProgressComponent width={65} label={"GIMP"} />


      </StyledSkillGridWrapper>



    </StyledSkillPageWrapper>

  </StyledPageWrapper>

}




export function ProgressComponent({ label, width }) {
  return <StyledProgressBar>
    <StyledProgressLabel variants={FadeLeftAnimationVariant} initial="hidden" whileInView="visible">{label}</StyledProgressLabel>
    <StyledProgressBackground >
      <StyledProgressForground width={width} custom={width} variants={WidthAnimationVariant} initial="hidden" whileInView="visible" >
        <StyledProgressIndicator>{`${width}%`}</StyledProgressIndicator>
      </StyledProgressForground>
    </StyledProgressBackground>
  </StyledProgressBar>
}

