import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 


// const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// const validationSchema = yup.object({
//     fullName: yup.string().min(3).max(100).required('Debes colocar tu nombre completo'),
//     password: yup.string().min(6).max(200).matches(PASSWORD_REGEX, "Por favor coloca un password más fuerte").required(),
//     email: yup.string().email('Por favor introduce una dirección de email válida').required(),
//     phoneNumber: yup.string().length(11).pattern(/^[0-9]+$/).required()
       
// })

const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('Debes colocar tu nombre completo'),
    password: yup.string().min(6).max(200).required(),
    email: yup.string().email('Por favor introduce una dirección de email válida').required(),
    phoneNumber: yup.string().length(11).required()
})


const RegisterForm = ({ handlingSubmitUser }) => {

    const onSubmit = (values) => {
        handlingSubmitUser(values)
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            password: "",
            email: "",
            phoneNumber: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    // console.log(formik.values)
    console.log(formik.errors)

    return (
        <div className="boxContainer">
            <form 
            onSubmit={formik.handleSubmit}
            className="formContainer">
                <input
                className="input"
                name="fullName"
                placeholder="Nombre completo" 
                type="text" 
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.fullName && formik.errors.fullName ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="email"
                placeholder="Correo electrónico" 
                type="email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.email && formik.errors.email ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="phoneNumber"
                placeholder="Teléfono" 
                type="text" 
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.phoneNumber && formik.errors.phoneNumber ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <input
                className="input"
                name="password"
                placeholder="Contraseña" 
                type="password" 
                value={formik.values.password}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.password && formik.errors.password ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <button
                type="submit"
                >Enviar</button>
            </form>

        </div>
    )
}

export default RegisterForm