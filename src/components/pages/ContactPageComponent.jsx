import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { StyledPageWrapper, StyledContactPageWrapper, StyledButtonWrapper, StyledInputField, StyledButton, StyledError, StyledGridItem, StyledIframe, StyledGridWrapper, StyledForm, StyledFormField, StyledFormFieldContainer } from '../../styled_components'
import { useForm } from "react-hook-form"
import { FadeRightAnimationVariant,FadeLeftAnimationVariant,ButtonHoverEffect } from "../../FrammerMotionAnimations";





export default function ContactPageComponent() {
  return (
    <StyledPageWrapper $background_color={"#fff"}>

      <StyledContactPageWrapper>
        <h1>Contact Me </h1>
        <p>Even though anyone can contact using email or phone call, but if you are not able to contact using these, please submit following form to be connected with me.</p>
        <StyledGridWrapper>
          <StyledGridItem variants={FadeLeftAnimationVariant} initial="hidden" whileInView={"visible"}><StyledIframe title="location_name" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.959445088253!2d-122.82371442386165!3d49.16396017137521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9e4b24a853b%3A0x87bba2256d9df31!2s14485%2088a%20Ave%2C%20Surrey%2C%20BC%20V3R%201A2!5e1!3m2!1sen!2sca!4v1704005800556!5m2!1sen!2sca" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></StyledIframe></StyledGridItem>
          <StyledGridItem variants={FadeRightAnimationVariant} initial="hidden" whileInView={"visible"}>
            <ContactFormComponent />
          </StyledGridItem>
        </StyledGridWrapper>
      </StyledContactPageWrapper>
    </StyledPageWrapper>
  )
}



export function ContactFormComponent() {
  const formRef = useRef();
  const { register, handleSubmit,reset } = useForm();



  const onSubmit = (e) => {
 
    emailjs.sendForm('service_7dhinyp', 'template_simple1', formRef.current, 't_khGzsuugRJ2lw3m')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    reset();
    

  }

  return <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
    {/* <h1>Contact Me</h1> */}
    <StyledFormFieldContainer>
      <InputFieldComponent register={register} name={"name"} placeholder={"Full Name"} error={""} />
      <InputFieldComponent register={register} name={"phone"} placeholder={"Phone Number"} error={""} />
      <InputFieldComponent register={register} name={"email"} placeholder={"Email Address"} error={""} />
      <TextAreaComponent register={register} name={"message"} placeholder={"Message"} error={""} rows={5} />

      <StyledButtonWrapper>

        <StyledButton variants={ButtonHoverEffect} whileHover={"hover"} type="submit">Submit</StyledButton>
        <StyledButton variants={ButtonHoverEffect} whileHover={"hover"} type='reset'>Reset</StyledButton>

      </StyledButtonWrapper>

      


    </StyledFormFieldContainer>




  </StyledForm>
}


function InputFieldComponent({ placeholder, error, name, register }) {
  return <StyledFormField>
    <StyledInputField placeholder={placeholder} {...register(name)} />
    <StyledError >{error}</StyledError>

  </StyledFormField>
}






function TextAreaComponent({ rows, placeholder, error, name, register }) {
  return <StyledFormField>
    <StyledInputField as={"textarea"} rows={rows} placeholder={placeholder} {...register(name)} />
    <StyledError>{error}</StyledError>
  </StyledFormField>
}


