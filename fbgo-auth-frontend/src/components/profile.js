import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
    const [ userData, setUserData ] = useState({
        name: 'loading',
        picture: ""
    })

    useEffect(() => {
        if (props.user) {
            setUserData({
                name: props.user.username,
                picture: props.user.picture
            })
        }
    },[])


    return (
        <div>
            <div 
            className="card"
            style={{margin:'10%', padding:'10px', textAlign:'center'}}
            >
               <h1>My Profile</h1>
               <h2>{userData.name}</h2>
               <img 
               className="circle"
               src={userData.picture} alt="my pic" 
               style={{width:'50%'}}
               /> 
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('State: ', state.auth)
    return {
        user: state.auth || {
            _id: "5234455jfhfhfg3838",
            googleId: "893855487421",
            username: "Arnold Alvarez",
            picture: '',
            __v: 0

        }
    }
}



export default connect(null, mapStateToProps)(Profile)
