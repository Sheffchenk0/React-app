import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {login, logout} from '../../redux/authReducer';
import Header from './header';

class HeaderPageContainer extends React.Component{
    
    render(){
        return(
            <Header {...this.props}/>
        );
    }
}





let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    };
};

let mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPageContainer);