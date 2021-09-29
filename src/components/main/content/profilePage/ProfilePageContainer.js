import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateTextareaValue, togglePreloader, setProfile, getStatus, setStatus } from '../../../../redux/profilePageReducer';
import ProfilePage from './profilePage';
import { Redirect, withRouter } from 'react-router';
import { getAuthUserId, getIsFetching, getPosts, getProfile, getTextareaValue } from '../../../../redux/profilePageSelector';

class ProfilePageContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authUserId;
            if(!userId){
                this.redirect = true;
                return;
            }
        }
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidUpdate(){
        if(!this.props.match.params.userId){            
            this.userId = this.props.authUserId;
            if(!this.userId){
                this.redirect = true;
                return;
            }
        }
    }

    render(){
        if(this.redirect){
            return(
            <Redirect to="/dialogs"/>
            )
            }
        return(
            <ProfilePage {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        posts: getPosts(state),
        textareaValue: getTextareaValue(state),
        isFetching: getIsFetching(state),
        status: getStatus(state),       
        authUserId: getAuthUserId(state),
    };
};

let mapDispatchToProps = {
    addPost,
    updateTextareaValue,
    togglePreloader,
    setProfile,
    getStatus,
    setStatus,
};


let withRouterComponent = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouterComponent);