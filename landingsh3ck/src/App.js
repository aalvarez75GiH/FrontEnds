import React, { useState } from 'react'
import axios from 'axios'
import Error from './components/error'
import NiceMessage from './components/niceMessage'
import NavBar from './components/NavBar'
import Section1 from './views/section1'
import Section2 from './views/section2'
import Section3 from './views/section3'
import Section4 from './views/section4'


const App = () =>  {
    const playerRef = React.useRef(null);

    const [ error, setError ] = useState(null)
    const [ infoSent, setInfoSent ] = useState(null)
    const url_users = "http://localhost:5000/api/interestedUsers"
    const url_regUsers = "http://localhost:5000/api/users"
    const url_loginUsers = "http://localhost:5000/api/users/login"
    
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
      const response = await axios.post(url_users, {
          fullName, 
          email
      })
      setInfoSent('Gracias por enviarnos tus datos, estaremos en contacto...')
      }catch(error) {
        console.error(error.response.data)
        showError(error.response.data)
        // showError('Es posible que falten o correo electrónico o tu nombre...')
      }
    }

      const handlingSubmitRegUser = async(regUser) => {
      try {
       const { data } = await axios.post(url_regUsers, regUser)
       console.log(data)
        setInfoSent('Gracias por registrarte...')
      } catch (error) {
        console.error(error.response.data)
        showError(error.response.data)
      }
    }
    

    const handlingLoginUser = async(user) => {
      try {
        const { data } = await axios.post(url_loginUsers, user)
        console.log(data.token)
        localStorage.setItem('SH3CK_TOKEN', data.token) 
       } catch (error) {
         console.error(error.response.data)
         showError(error.response.data)
       }
    }

    return (
        <React.Fragment>
            <NavBar/>
            <NiceMessage message={ infoSent } hideMessage={ hideMessage }/>
            <Error message={ error } hideError={hideError} />
            <Section1 handlingSubmitUser={handlingSubmitUser} nextSection='section-2'  />
            <Section2 nextSection='section-3'/>
            <Section3 nextSection='section-4'/>
            <Section4 
            handlingSubmitRegUser={handlingSubmitRegUser}
            handlingLoginUser={handlingLoginUser}
            />
        </React.Fragment>
    ) 

}

export default App