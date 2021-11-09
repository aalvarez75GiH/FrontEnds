import React from 'react'
import { useFormik, Formik, Field } from 'formik'
import * as yup from 'yup'
import SelectCity from './selectCity'



const validationSchema = yup.object({
    fullName: yup.string().min(3).max(100).required('hola, no te olvides de colocar tu nombre completo'),
    email: yup.string().email('Por favor introduce una dirección de correo válida').required('No te olvides de colocar tu correo electrónico'),
    city: yup.string().min(3, 'Por favor introduce la ciudad').max(100).required('No te olvides de colocar la ciudad donde resides'),   
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
    console.log(formik.errors)

    return (
        <div className="boxContainer">
            <Formik>
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
                autoComplete="on"
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
                autoComplete="on"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                    borderBottom: `${formik.touched.email && formik.errors.email ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )'}`
                }}
                />
                
                <SelectCity
                onChange={formik.handleChange}
                error={formik.errors.city ? formik.errors : null}
                />
                <button
                type="submit"
                >Enviar</button>
            </form>
            </Formik>
            

        </div>
    )
}

export default InterestedUserForm
