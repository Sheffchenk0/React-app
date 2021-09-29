import React from 'react';

class Status extends React.Component{
    state = {
        editMode: false,
        statusText: this.props.status ? this.props.status : '' ,
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             statusText: this.props.status,
    //         });
    //     }
    // }

    activateEditMode = ()=>{
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = ()=>{
        this.setState(prevState =>{            
            this.props.setStatus(prevState.statusText);
            return {
                editMode: false,
            }
        });        
    }
    onStatusChange = (e) => {
        this.setState({
            statusText: e.currentTarget.value,
        });
        
    }
    render(){
        if(this.state.editMode){
            return(
                <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.statusText} type="text" />
            )
        }
        return (
            <div className="status" onDoubleClick={this.activateEditMode}>{this.props.status}</div>
        )
    }
}

export default Status;