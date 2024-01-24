import React from 'react'

import { FadeTopAnimationVariant } from "../../FrammerMotionAnimations";

import { StyledPageWrapper, StyledServicesPageWrapper, StyledProductsGrid, StyledCard, StyledCardImage, StyledcardWrapper, StyledCardDescription } from '../../styled_components'







export default function ServicesPageComponent() {
  return (
    <StyledPageWrapper $background_color={"#E1E5EA"}>
      <StyledServicesPageWrapper>
        <h1>Services</h1>
        <p>With my skills, I provide the following services to my customers with a great focus on Details, Safe Browsing and Eloquent design.</p>
        <StyledProductsGrid>
          <CardComponent label={"Micro Services powered by golang."} img_link={"https://openupthecloud.com/wp-content/uploads/2020/01/Golang.png"} />
          <CardComponent label={"React application powered by frammer motion"} img_link={"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png"} />
          <CardComponent label={"Support for both RDBMS and NoSql."} img_link={"https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"} />
        </StyledProductsGrid>

      </StyledServicesPageWrapper>
    </StyledPageWrapper>
  )
}


export function CardComponent({ img_link, label, alt }) {
  return <StyledCard variants={FadeTopAnimationVariant} whileHover={"hover"}  initial="hidden" whileInView={"visible"}>
    <StyledCardImage src={img_link} alt={alt ? alt : "failed to load img"} />
    <StyledcardWrapper>
      <StyledCardDescription>{label}</StyledCardDescription>
    </StyledcardWrapper>
  </StyledCard>
}
