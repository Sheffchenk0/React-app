import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../../../common/Preloader';
import { UsersAPI } from '../../../../../api/api';
import { withAuthRedirect } from '../../../../../hoc/RedirectAuth';

class UsersContainer extends React.Component {
    constructor(props){
        super(props);
    };
    componentDidMount(){
        this.props.getPage(this.props.state.currentPage, this.props.state.pageSize);
    }

    setCurrentPage = (id) =>{
        this.props.getPage(id, this.props.state.pageSize);
    }

    follow = (id) => {
        this.props.follow(id);
    };
    unfollow = (id) => {
        this.props.unfollow(id);
    };

    render() {
        return(
            <>
                {this.props.state.isFetching ? <Preloader/> : null }
                <Users 
                state={this.props.state}
                setCurrentPage={this.setCurrentPage}
                follow={this.follow}
                setState={this.props.setState}
                togglePreloader={this.props.togglePreloader}
                unfollow={this.unfollow}
                />
            </>
        );

    }
}

export default UsersContainer;