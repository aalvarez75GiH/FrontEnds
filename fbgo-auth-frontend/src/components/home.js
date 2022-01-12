import React from 'react'

const Home = () => {
    return (
        <div 
        className="card"
        style={{margin: '10%', padding:'10%', textAlign:'center'}}
        >
            <div className="row">
                <a 
                href="http://localhost:5000/auth/google"
                className="waves-effect waves-light btn red lighten-1"
                >
                    Sign Up with Google
                </a>{" "}
                &emsp;&emsp;
                <a 
                href="http://localhost:5000/auth/facebook"
                className="waves-effect waves-light btn indigo darken-3"
                >
                    Sign Up with Facebook
                </a>
            </div>
        </div>
    )
}

export default Home
