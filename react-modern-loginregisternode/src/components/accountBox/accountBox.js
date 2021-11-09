import React, {useState} from 'react'
import styled from 'styled-components'
import LoginForm from './loginForm'
import SignUpForm from './signUpForm'
import { motion } from 'framer-motion'
import { AccountContext } from './accountContext'

const BoxContainer = styled.div`
    width: 280px;
    min-height: 555px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #ffffff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative ;
    overflow: hidden;
`

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`

const BackDrop = styled(motion.div) `
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    top:-290px;
    left: -70px;
    transform: rotate(60deg);
    background: rgb(241,196,15);
    background: linear-gradient(
        58deg, rgba(241,196,15,1) 20%, 
        rgba(243,172,18,1) 100%);
`

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #ffffff;
    z-index:10;
    margin: 0;
`

const SmallText = styled.h5`
color: #ffffff;
font-weight: 500;
font-size: 11px;
z-index: 10;
margin: 0;
margin-top: 7px;
`
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
    
`

const BackDropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"

    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
}


export const AccountBox = () => {

    const [isExpanded, setIsExpanded ] = useState(false)
    const [ active, setActive ] = useState('SignIn')

    const toggleBackdrop = () => {
        setIsExpanded(true)
        setTimeout(()=> {
            setIsExpanded(false)
        },expandingTransition.duration * 1000 - 1500)
        
    } 

    const switchToSignUp = () => {
        toggleBackdrop()
        setTimeout(()=> {
            setActive('SignUp')
        },400)
        
    }

    const switchToSignIn = () => {
        toggleBackdrop()
        setTimeout(()=> {
            setActive('SignIn')
        },400)
        
    }

    const contextValue = { switchToSignUp, switchToSignIn }


    return (
         <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                    initial={false} 
                    variants={BackDropVariants}
                    animate={isExpanded ? "expanded" : "collapsed" }
                    transition={expandingTransition}
                    />
                    {active === 'SignIn' && <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please sign in to continue</SmallText>
                    </HeaderContainer>
                    }
                    {active === 'SignUp' && <HeaderContainer>
                        <HeaderText>Create</HeaderText>
                        <HeaderText>Account</HeaderText>
                        <SmallText>Please sign up to continue</SmallText>
                    </HeaderContainer>
                    }
                </TopContainer>
                <InnerContainer>
                    {active === 'SignIn' && <LoginForm />  }
                    {active === 'SignUp' && <SignUpForm />  }
                </InnerContainer>

            </BoxContainer>
         </AccountContext.Provider>

        
    )
}