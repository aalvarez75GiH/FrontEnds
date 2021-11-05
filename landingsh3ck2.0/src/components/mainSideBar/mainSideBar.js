import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiUserCheck } from 'react-icons/bi'

// import LoginForm from '../contactSection/loginForm'


const MainSideBar = ({ 
    toggleMainSideBar, 
    mainSideBarOpen, 
    username,
    loggedOut,
    loggedIn,
    handlingSubmitLogOutUser, 
}) => {
    console.log(loggedIn)
    console.log(loggedOut)
    console.log(mainSideBarOpen)
      
    if (loggedIn && mainSideBarOpen){
       return (
       <aside
            className={`${mainSideBarOpen ? "mainSideBarContainerOpen" : "mainSideBarContainer" }`}>
                <div className="mainSideContactForms">
                    <div 
                        className="mainSideBarIcon"
                        onClick={ toggleMainSideBar }
                    >
                        <FaTimes className="mainSideCloseIcon"/>
                    </div>
                    <div className="mainSideHeader">

                    </div>
                    <div className="mainSideBarContent">
                        <div className="mainSideBarContentUser">
                            <div className="mainSideBarUserIcon">
                                <BiUserCheck />
                            </div>
                            
                            <h1 className="mainSideBarUserName">Hola, <b>{username}</b> </h1>
                        </div>
                        <div className="mainSideBarContentOptions">
                            <div  className="mainSideBarContentItems">
                                Mi cuenta
                            </div>
                            <div className="mainSideBarContentItems">
                                Mis chequeos
                            </div>
                            <div className="mainSideBarContentItems">
                                Ayuda
                            </div>
                            <div className="mainSideBarContentItems">
                                Preguntas y respuestas
                            </div>
                            <div
                            onClick={handlingSubmitLogOutUser} 
                            className="closeBtn">
                                Cerrar sesión
                            </div>
                        </div>
                    </div>
                </div>
        </aside>
    ) 
    }else{
        return null
    }

}

export default MainSideBar