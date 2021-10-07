import { connect } from "react-redux";
import { updateSearchDialogValueActionCreator } from "../../../../../../redux/dialogsPageReducer";
import SeacrhPanel from "./SearchPanel";

let mapStateToProps = (state) => {
  return ({
    value: state.dialogsPage.value,
  });
};
let mapDispatchToProps = (dispatch) => {
  return ({
    updateSearchDialogValue: ()=>{
      dispatch(updateSearchDialogValueActionCreator());
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SeacrhPanel);


// export default (props) => {
//   let updateSearchDialogValue = (body) => {
//     let action = updateSearchDialogValueActionCreator(body.target.value);
//     props.store.dispatch(action);
//   };
//   return (
//     <SeacrhPanel value={props.value} updateSearchDialogValue={updateSearchDialogValue} />
//   );
// };
