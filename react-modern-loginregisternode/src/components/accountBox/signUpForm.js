import React, {useContext} from 'react'
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    MutedLink, 
    SubmitButton,
    BoldLink 
} from './common'
import { Marginer } from '../marginer/marginer'
import { AccountContext } from './accountContext'

const SignUpForm = () => {

    const { switchToSignIn } = useContext(AccountContext)
    
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="FullName"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
            </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1em"/>
            <SubmitButton type="submit">SignUp</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#">Already have an Account?
                <BoldLink
                onClick={switchToSignIn}
                >Login</BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}

export default SignUpForm