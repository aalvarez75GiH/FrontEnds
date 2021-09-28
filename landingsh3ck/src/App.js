import React, { useState } from 'react'
import NavBar from './components/navBar'
import Main from './components/main'
import axios from 'axios'
import Section4 from './views/section4'
import Error from './components/error'


const App = () =>  {

    const [ error, setError ] = useState(null)
    

    const showError = ( message ) => {
        setError(message)
    }

    const hideError = () => {
        setError(null)
    }

    const handlingSubmitUser = async(fullName, email) => {
            try {
                const URL = "http://localhost:5000/api/users"
                const response = await axios.post(URL, {
                    fullName, 
                    email
                })
                console.log(response.status)
              }catch(error) {
                console.error(error.response.data)
                showError(error.response.data)
                // showError('Es posible que falten o correo electrónico o tu nombre...')
              }
        }
        
    return (
        <React.Fragment>
            <NavBar />
            <Error message={ error } hideError={hideError} />
            <Main center>
               <Section4 
               handlingSubmitUser={ handlingSubmitUser }/> 
            </Main>
        </React.Fragment>
        
        
        
    ) 

}

export default App