import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setStateAC, unfollowAC } from '../../../../redux/usersPageReducer';
import UsersPage from './UsersPage';

let mapStateToProps = (state) => {
    return {
        usersState: {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            pageSize: state.usersPage.pageSize,
            currentPage: state.usersPage.currentPage,
        },
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        usersCB: {
            unfollow: (userId) => {
                dispatch(unfollowAC(userId));
            },
            follow: (userId) => {
                dispatch(followAC(userId));
            },
            setState: (users, count) => {
                dispatch(setStateAC(users, count));
            },
            setCurrentPage: (event) => {
                dispatch(setCurrentPageAC(event.target.dataset.id));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);