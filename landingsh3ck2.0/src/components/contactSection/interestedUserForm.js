import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup' 



const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('Debes colocar tu nombre completo'),
    email: yup.string().email('Por favor introduce una dirección de email válida').required(),
    city: yup.string().min(3, 'Por favor introduce la ciudad').max(100, 'Por favor introduce la ciudad').required(),   
})


const InterestedUserForm = ({ handlingSubmitInterestedUser }) => {

    const onSubmit = (values) => {
        handlingSubmitInterestedUser(values)
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            city: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema

    })

    // console.log(formik.values)
    // console.log(formik.errors)

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
                name="city"
                placeholder="Ciudad" 
                type="text" 
                value={formik.values.city}
                onChange={formik.handleChange}                
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.city && formik.errors.city ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                <button
                type="submit"
                >Enviar</button>
            </form>

        </div>
    )
}

export default InterestedUserForm
