import React, { useState } from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'

const App = () =>  {

  const [loginData, setLoginData ] = useState(
    localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
  ) 

  const handleFailure = (result) => {
    alert(result)
  }

  const handleLogin = async(googleData) => {
    console.log(googleData)
    const res = await fetch('/api/google-login',{
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    setLoginData(data)
    localStorage.setItem('loginData', JSON.stringify(data))
  }
  
  const handleLogout = () => {
    localStorage.removeItem('loginData')
    setLoginData(null)
  }
  
  console.log(loginData)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        {
          loginData ? (
            <div>
              <h3>You logged in as {loginData.name}</h3>
              <button
              onClick={handleLogout}
              >Logout</button>
            </div>
          ):
          <div>
             <GoogleLogin
             clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
             buttonText="Log in with Google"
             onSuccess={handleLogin}
             onFailure={handleFailure}
             cookiePolicy={'single_host_origin'}
             />
          </div>
        }
      </header>
    </div>
  );
}

export default App
