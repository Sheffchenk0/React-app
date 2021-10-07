import React from "react";
import { connect } from "react-redux";
import {
    addPost,
    updateTextareaValue,
    togglePreloader,
    setProfile,
    queryStatus,
    setStatus,
    updateStatus,
    savePhoto,
    saveProfile,
} from "../../../../redux/profilePageReducer";
import ProfilePage from "./profilePage";
import { Redirect, withRouter } from "react-router";
import {
    getAuthUserId,
    getIsFetching,
    getPosts,
    getStatus,
    getProfile,
    getTextareaValue,
} from "../../../../redux/profilePageSelector";
import { useEffect } from "react";

const ProfilePageContainer = (props) => {
    let userId;
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authUserId;
            if (!userId) {
                return;
            }
        }
        props.setProfile(userId);
        props.queryStatus(userId);
    }, [props.match.params.userId, props.authUserId]);

    if (!props.match.params.userId) {
        userId = props.authUserId;
        if (!userId) {
            return <Redirect to="/login" />;
        }
    }
    return <ProfilePage {...props} isOwner={!props.match.params.userId}/>;
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
    queryStatus,
    setStatus,
    updateStatus,
    savePhoto,
    saveProfile,
};

let withRouterComponent = withRouter(ProfilePageContainer);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouterComponent);
