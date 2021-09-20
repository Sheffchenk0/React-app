import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { BrowserRouter } from "react-router-dom";

function App(props) {
    return (
      <BrowserRouter>
        <div className="container">
                <Header />
                <Main/>
        </div>
      </BrowserRouter>
    );
}

export default App;
