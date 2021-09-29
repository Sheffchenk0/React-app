import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { addMessageAC } from './redux/dialogsPageReducer';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let rerender = (store) => {
  ReactDOM.render(
    
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
  reportWebVitals();
};


store.subscribe(() => {
  rerender(store);  
}
);
rerender(store);


function newMessageEventListener() {
  let element = document.getElementById('newMessageTextarea');
  if (element) {
    element.addEventListener('keydown', function (key) {
      if (key.keyCode === 13) {
        key.preventDefault();
        let action = addMessageAC();
        store.dispatch(action);
      }
    }
    );
  }
}

newMessageEventListener();