import React, { Component, Fragment } from 'react'
import GoogleLogin from 'react-google-login';

 class GoogleAuth extends Component {
    
    render() {
         const responseGoogle = (response) => {
  console.log(response);
}
        return (
            <Fragment>
                <GoogleLogin
                    clientId="403158720820-c65k7v0g0lra7klgoii7q2g4eh7ogtp9.apps.googleusercontent.com"
                    buttonText="Admin Google Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Fragment>
        )
    }
}

export default GoogleAuth
