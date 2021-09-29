import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth, 
    }
};

export const withAuthRedirect = (Component) => {
    class AuthRedirect extends React.Component{
        render(){
            if(this.props.isAuth) {
                return <Component {...this.props}/>
            }
            return <Redirect to="login"/>;
        }
    };
    let connectedAuthRedirect = connect(mapStateToProps)(AuthRedirect);
    return connectedAuthRedirect;
};
