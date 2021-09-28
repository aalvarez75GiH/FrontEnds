import React, { useState } from 'react'
import NavBar from './components/navBar'
import Main from './components/main'
import axios from 'axios'
import Section4 from './views/section4'
import Error from './components/error'
import NiceMessage from './components/niceMessage'


const App = () =>  {

    const [ error, setError ] = useState(null)
    const [ infoSent, setInfoSent ] = useState(null)
    

    const showError = ( message ) => {
        setError(message)
    }

    const hideError = () => {
        setError(null)
    }
    const hideMessage = () => {
        setInfoSent(null)
    }
  

    const handlingSubmitUser = async(fullName, email) => {
            try {
                const URL = "http://localhost:5000/api/users"
                const response = await axios.post(URL, {
                    fullName, 
                    email
                })
                console.log(response.status)
                setInfoSent('Gracias por enviarnos tus datos, estaremos en contacto...')
              }catch(error) {
                console.error(error.response.data)
                showError(error.response.data)
                // showError('Es posible que falten o correo electrónico o tu nombre...')
              }
        }
        
    return (
        <React.Fragment>
            <NavBar />
            <NiceMessage message={ infoSent } hideMessage={ hideMessage }/>
            <Error message={ error } hideError={hideError} />
            <Main center>
                <div className="video">
                <video
                className="video"  
                controls />
                <source src="../public/Videos/sh3ck-1080p-210923.mp4" type="video/mp4"/>
                {/* <video src=".././content/sh3ck-1080p-210923.mp4"></video> */}
                </div>
               <Section4  
               handlingSubmitUser={ handlingSubmitUser }/>
            </Main>
        </React.Fragment>
    ) 

}

export default App