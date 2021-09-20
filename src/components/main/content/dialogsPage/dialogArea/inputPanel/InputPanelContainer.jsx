import React from "react";
import { addMessageActionCreator, updateInputValueActionCreator } from "../../../../../../redux/dialogsPageReducer";
import InputPanel from "./InputPanel";
import { connect } from "react-redux";

let mapStateToProps = (state)=> {
    return(
        {
            inputValue: state.dialogsPage.inputValue,
        }
    );
};

let mapDispatchToProps = (dispatch)=>{
    return(
        {
            addMessage: () => {
                dispatch(addMessageActionCreator());
            },
            updateInputValue: (body) => {
                dispatch(updateInputValueActionCreator(body.target.value));
            },
        }
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);




// export default (props) => {
//     let addMessage = ()=>{
//         let action = addMessageActionCreator();
//         props.store.dispatch(action);
//         console.log(1);
//     }
//     let updateInputValue = (body)=>{
//         let action = updateInputValueActionCreator(body.target.value);
//         props.store.dispatch(action);
//         console.log(2);
//     }
//     return (
//         <InputPanel addMessage={addMessage} updateInputValue={updateInputValue} inputValue={props.inputValue}/>
//     );
// };
