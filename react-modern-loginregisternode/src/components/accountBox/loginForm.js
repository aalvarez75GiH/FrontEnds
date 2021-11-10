import React, {useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as yup  from 'yup'
import axios from 'axios'
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    MutedLink, 
    SubmitButton,
    BoldLink,
    FieldFailure,
    FieldSuccess,
    FieldContainer,
    FieldError 
} from './common'
import { Marginer } from '../marginer/marginer'
import { AccountContext } from './accountContext'

const validationSchema = yup.object({
    email: yup.string().email('Please enter a valid email address').required('Email is Required...'),
    password: yup.string().min(6).max(200).required()
})

const url_login = 'http://192.168.1.102:5000/api/v1/login'



const LoginForm = () => {

    const { switchToSignUp } = useContext(AccountContext)
    const [success, setSuccess ] = useState(null)
    const [ error, setError ] = useState(null)

    const onSubmit = async(values) => {
        console.log(values)
        // const { data } = values
        console.log('this is login Form')
        try {
            const response = await axios.post(url_login, values)
            console.log(response)
            setSuccess(response.data.message)
            localStorage.setItem('MyToken', response.data.token)
            formik.resetForm()    
        } catch (error) {
            setError(error.response.data.message)
            console.log('Error:', error.data.message)
        }
    }

    const formik = useFormik({
        initialValues:{
            email: "",
            password: "",
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    })



    return(
        <BoxContainer>
            {!error && <FieldSuccess>{success ? success : "" }</FieldSuccess> }
            <FieldFailure>{error ? error : "" }</FieldFailure>
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>
                        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                        </FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>
                        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}  
                        </FieldError>    
                </FieldContainer>
                <Marginer direction="verctical" margin="1.6em"/>
                <SubmitButton
                    disabled={!formik.isValid} 
                    type="submit">SignIn</SubmitButton>        
            </FormContainer>
                <Marginer direction="verctical" margin={10}/>
                <MutedLink href="#">Forget your password?</MutedLink>            
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