import React from 'react'
import { FaTimes } from 'react-icons/fa'
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
      
    if (loggedIn){
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
                    <div className="mainSideBarMain">
                        <div className="mainSideBarFormTitle">
                            <h1 className="mainSideBarTitle">Hola, <b>{username}</b> </h1>
                        </div>
                        <ul className="mainSideOptionsList">
                            <li>
                                Mi cuenta
                            </li>
                            <li>
                                mis chequeos
                            </li>
                            <li>
                                Ayuda
                            </li>
                            <li>
                                cerrar sesion
                            </li>
                        </ul>

                        <div className="mainSideBarTitleWrapperLoggedIn">
                            <div className="mainSideBarFormTitleLoggedIn">
                                <h1 className="mainSideBarTitle">¿Quieres cerrar sesión? </h1>
                            </div>
                            <button 
                            onClick={handlingSubmitLogOutUser}
                            // onClick={toggleLogoutSideBar}
                            className="closeSessionBtn">
                                Cierra Sesión
                            </button>
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