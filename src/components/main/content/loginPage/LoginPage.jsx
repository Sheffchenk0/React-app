import React from 'react';
import {useForm} from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { auth } from '../../../../redux/authReducer';

let LoginPage = (props) => {
    let {register, handleSubmit} = useForm();
    let onSubmit = data => {
        props.auth(data.email, data.password, data.rememberMe);
    };
    if(props.isAuth){
        return (<Redirect to="/profile" />);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>Login page</div>
                <div><label htmlFor="email">email</label></div>
                <div><input id="email" {...register("email")}/></div>

                <div><label htmlFor="password">password</label></div>
                <div><input type="password" id="password" {...register("password")}/></div>

                <div><label htmlFor="rememberMe">Remember me</label></div>
                <input id="rememberMe" type="checkbox" {...register("rememberMe")}/>

                <div></div><button type="submit">submit</button>
            </form>
        </>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {auth})(LoginPage);