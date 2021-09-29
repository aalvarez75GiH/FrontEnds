import React, { useState } from 'react'
import Main from './components/main'
import axios from 'axios'
import Section4 from './views/section4'
import Error from './components/error'
import NiceMessage from './components/niceMessage'
import NavBar from './components/NavBar'
import Section1 from './views/section1'
import Section2 from './views/section2'
import Section3 from './views/section3'
import Separator from './components/separator'


const App = () =>  {
    const playerRef = React.useRef(null);

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

      const handlePlayerReady = (player) => {
        playerRef.current = player;
    
        // you can handle player events here
        player.on('waiting', () => {
          console.log('player is waiting');
        });
    
        player.on('dispose', () => {
          console.log('player will dispose');
        });
      };
    


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
            <NavBar/>
            <NiceMessage message={ infoSent } hideMessage={ hideMessage }/>
            <Error message={ error } hideError={hideError} />
            <Section1 handlingSubmitUser={handlingSubmitUser} />
            <Separator 
            buttonCaption='¿Quieres saber más?' 
            background_color='#000000'
            button_bkgColor='#000000'
            button_caption_color='#ffffff'
            button_border_color={`2px solid ${'white'}`}
            />
            <Section2/>
            <Separator 
            buttonCaption='Como funciona' 
            background_color='#fffd82'
            button_bkgColor='#fffd82'
            button_caption_color='#000000'
            button_border_color={`2px solid ${'black'}`}
            />
            <Section3/>            
        </React.Fragment>
    ) 

}

export default App