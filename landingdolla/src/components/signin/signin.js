import React from 'react'
import { Link } from  'react-router-dom'
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    FormText
 } from './signinElements.js'



 const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='For'>Email</FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel htmlFor='For'>Password</FormLabel>
                            <FormInput type="password" required/>
                            <FormButton type="submit">Continue</FormButton>
                            <FormText>Forgot Password? </FormText>
                        </Form>
                    </FormContent>
                </FormWrap>    
            </Container>        
        </>
    )
}       

export default SignIn
