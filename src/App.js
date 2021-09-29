import React from 'react';
import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import Main from "./components/main/main";
import HeaderContainer from "./components/header/HeaderContainer";
import { connect } from "react-redux";
import { setReady } from "./redux/authReducer";
import Preloader from './components/common/Preloader';

class App extends React.Component {
  componentDidMount(){    
    this.props.setReady();
  }

  render() {
    if(!this.props.isReady){
      console.log(1323);
      return(<Preloader />)
    }
    return (
        <div className="container">
          <HeaderContainer />
          <Main />
        </div>
    );
  }
}

let mapStateToProps = (state) => ({
  isReady: state.auth.isReady,
});

export default connect(mapStateToProps, {setReady})(App);
