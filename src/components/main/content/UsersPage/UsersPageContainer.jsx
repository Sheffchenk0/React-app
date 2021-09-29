import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/RedirectAuth';
import { follow, getPage, setCurrentPage, setState, toggleDisabled, togglePreloader, unfollow } from '../../../../redux/usersPageReducer';
import UsersPage from './UsersPage';

let mapStateToProps = (state) => {
    return {
        usersState: {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            pageSize: state.usersPage.pageSize,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            disabled: state.usersPage.disabled,
        },
    };
};
let mapDispatchToProps = {
    follow,
    setCurrentPage,
    setState,
    togglePreloader,
    unfollow,
    toggleDisabled,
    getPage,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersPage);