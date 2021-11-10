import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup  from 'yup'
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    MutedLink, 
    SubmitButton,
    BoldLink,
    FieldContainer,
    FieldError, 
    FieldSuccess,
    FieldFailure
} from './common'
import { Marginer } from '../marginer/marginer'
import { AccountContext } from './accountContext'

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const url_register = 'http://192.168.1.102:5000/api/v1/register'
// const validationSchema = yup.object({
//     fullName: yup.string().min(3, 'Please enter your real name').required('Full Name is required'),
//     email: yup.string().email('Please enter a valid email address').required(),
//     password: yup.string().matches(PASSWORD_REGEX, "Plaease enter a strong password").required(),
//     confirmPassword: yup.string().when('password', {
//         is: val => (val && val.length > 0 ? true : false),
//         then:  yup.string().oneOf([yup.ref('password')], 'Password does Not match')
//     })
// })
const validationSchema = yup.object({
    fullName: yup.string().min(3, 'Please enter your real name').required('Full Name is required'),
    email: yup.string().email('Please enter a valid email address').required(),
    password: yup.string().min(6).max(200).required(),
    confirmPassword: yup.string().required("Please confirm your password").when('password', {
        is: val => (val && val.length > 0 ? true : false),
        then:  yup.string().oneOf([yup.ref('password')], 'Password does Not match')
    })
})


const SignUpForm = () => {

    const { switchToSignIn } = useContext(AccountContext)
    const [ success, setSuccess ] = useState(null)
    const [ error, setError ] = useState(null)
    
    const onSubmit = async(values) => {
        const {confirmPassword, ...data } = values
        console.log('hey...')
        try {
            const response = await axios.post(url_register, data)
            console.log(response)
            setSuccess(response.data.message)
            formik.resetForm()    
        } catch (error) {
            setError(error.response.data.message)
            console.log('Error:', error.data.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    })

    console.log(error)
    return (
        <BoxContainer>
            {!error && <FieldSuccess>{success ? success : "" }</FieldSuccess> }
            <FieldFailure>{error ? error : "" }</FieldFailure>
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input 
                    name="fullName" 
                    type="text" 
                    placeholder="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>
                            {formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ""}
                        </FieldError>
                </FieldContainer>
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
                <FieldContainer>
                    <Input 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
                        </FieldError>
                </FieldContainer>
                <Marginer direction="vertical" margin="1em"/>
                <SubmitButton
                disabled={!formik.isValid} 
                type="submit">SignUp</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin={5}/>
            <MutedLink href="#">Already have an Account?
                <BoldLink
                onClick={switchToSignIn}
                >Login</BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}

export default SignUpForm