import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
 import './facebookgoogle.css';


export default class Facebook extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn: false
        }
    }

    responseFacebook = (response) =>{
        console.log(response);
        this.setState({
            isLoggedIn:true
        })

    };
    render() {
        return( 
        (<div>
            <FacebookLogin
                appId="967388860514328"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="btnfacebook" 
                id="facebookBtn"
                data-testid="facebook-login-btn"/>
                </div>
                )
            )
    }
}
