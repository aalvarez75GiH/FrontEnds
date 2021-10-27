import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
// import LoginForm from '../contactSection/loginForm'
import LoginSideBarForm from './loginSideBarForm'
const LoginSideBar = ({ 
    toggleLoginSideBar, 
    loginSideBarOpen, 
    handlingSubmitLoginUser,
    loggedIn, 
    loggedOut
}) => {
    //  if (!loggedIn){
    //    return (
    //    <aside
    //         className={`${loginSideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
    //             <div className="loginContactForms">
    //                 <div 
    //                     className="loginSideBarIcon"
    //                     onClick={ toggleLoginSideBar }
    //                 >
    //                     <FaTimes className="loginCloseIcon"/>
    //                 </div>
    //                 <div className="loginSideHeader">

    //                 </div>
    //                 <h2>Hola, haz iniciado sesión como:</h2>
    //                     <div className="userInfo">
    //                         <p>{username}</p>
                            
    //                     </div>
    //                 <div className="loginSideBarTitleWrapperLoggedIn">
    //                     <div className="loginSideBarFormTitleLoggedIn">
    //                         <h1 className="loginSideBarTitle">¿Quieres cerrar sesión? </h1>
    //                     </div>
    //                     <button 
    //                     onClick={handlingSubmitLogOutUser}
    //                     className="closeSessionBtn">
    //                         Cierra Sesión
    //                     </button>
    //                 </div>
                    
    //             </div>
    //     </aside>
    // ) 
    // }
    // else{
    //     return null
    // }
    console.log(loggedIn)
    console.log(loggedOut)
    if (loggedOut){
        return (
            <aside
            className={`${loginSideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
                <div className="loginContactForms">
                    <div 
                        className="loginSideBarIcon"
                        onClick={ toggleLoginSideBar }
                    >
                        <FaTimes className="loginCloseIcon"/>
                    </div>
                    <div className="loginSideHeader">
    
                    </div>
                            <div className="loginSideBarFormTitle">
                                <h1 className="loginSideBarTitle">Inicia sesión </h1>
                            </div>
                            <div className="loginSideBarFormDescription">
                                <p>Para que podamos chequear productos debes hacer inicio de sesión</p>
                            </div>
                        
                        <LoginSideBarForm handlingSubmitLoginUser={handlingSubmitLoginUser}/>
                </div>
    
                
    
    
            </aside>
        )
    }else{
        return null
    }
    
}

export default LoginSideBar