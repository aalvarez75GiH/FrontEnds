import React from 'react'


class GoogleAuth3 extends React.Component {
     
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.onload = () => {
            this.google.accounts.id.initialize({
                client_id: '915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com',
                callback: this.handleCredentialResponse
            })
        }
    }

    handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
    }
    
    
    renderGoogleAuthButton() {
        if (this.state.isSignedIn === null) {
            return <button 
            onClick={this.onSignOutClick}
            className="googleAuthBtn">Undetermined</button>
        }else if (this.state.isSignedIn){
            return (
                <button 
                onClick={this.onSignOutClick}
                className="googleAuthBtn">Sign Out</button>
            )
        }else{
            return (
                <button 
                onClick={this.onSignInClick}
                className="googleAuthBtn">Sign In with Google</button>
            )
        }
    }
    
    render () {
        return <div className="googleAuthContainer">{this.renderGoogleAuthButton()}</div>
    }
}

export default GoogleAuth3