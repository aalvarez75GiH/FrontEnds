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


const LoginForm = () => {

    const { switchToSignUp } = useContext(AccountContext)
    return(
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
            <Marginer direction="verctical" margin={10}/>
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="verctical" margin="1.6em"/>
            <SubmitButton type="submit">SignIn</SubmitButton>
            <Marginer direction="verctical" margin="1em"/>
            <MutedLink href="#">Don't Have an Account? 
                <BoldLink
                onClick={ switchToSignUp }
                >Sign Up</BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}

export default LoginForm