import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
// import LoginForm from '../contactSection/loginForm'
import LoginSideBarForm from './loginSideBarForm'
const LoginSideBar = ({ 
    toggleLoginSideBar, 
    sideBarOpen, 
    handlingSubmitLoginUser,
    loggedIn,
    handlingSubmitLogOutUser 
}) => {
    if (loggedIn){
       return (
       <aside
            className={`${sideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
                <div className="loginContactForms">
                    <div 
                        className="loginSideBarIcon"
                        onClick={ toggleLoginSideBar }
                    >
                        <FaTimes className="loginCloseIcon"/>
                    </div>
                    <div className="loginSideBarTittleWrapperLoggedIn">
                        <div className="loginSideBarFormTitle">
                            <h1 className="loginSideBarTitle">Cierra sesión </h1>
                        </div>
                        <button 
                        onClick={handlingSubmitLogOutUser}
                        className="closeSessionBtn">
                            Cierra Sesión
                        </button>
                    </div>
                    
                        {/* <LoginSideBarForm handlingSubmitLoginUser={handlingSubmitLoginUser}/> */}
                        {/* <LoginForm handlingSubmitLoginUser={handlingSubmitLoginUser}/> */}
                </div>

                {/* <div className="loginSideBarWrapper">
                    <div className="loginSideBtnWrap">
                        <LinkR
                        className="loginSideBarRoute" 
                        to="/signin">
                            Haz Login
                        </LinkR>
                    </div>

                </div> */}
        </aside>
    ) 
    }
    return (
        <aside
        className={`${sideBarOpen ? "loginSideBarContainerOpen" : "loginSideBarContainer" }`}>
            <div className="loginContactForms">
                <div 
                    className="loginSideBarIcon"
                    onClick={ toggleLoginSideBar }
                >
                    <FaTimes className="loginCloseIcon"/>
                </div>
                    <div className="loginSideBarTittleWrapper">
                        <div className="loginSideBarFormTitle">
                            <h1 className="loginSideBarTitle">Inicia sesión </h1>
                        </div>
                        <div className="loginSideBarFormDescription">
                            <p>Para que podamos chequear productos debes hacer inicio de sesión</p>
                        </div>
                    </div>
                    
                    <LoginSideBarForm handlingSubmitLoginUser={handlingSubmitLoginUser}/>
                    {/* <LoginForm handlingSubmitLoginUser={handlingSubmitLoginUser}/> */}
            </div>

            {/* <div className="loginSideBarWrapper">
                <div className="loginSideBtnWrap">
                    <LinkR
                    className="loginSideBarRoute" 
                    to="/signin">
                        Haz Login
                    </LinkR>
                </div>

            </div> */}


        </aside>
    )
}

export default LoginSideBar