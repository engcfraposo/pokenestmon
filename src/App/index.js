import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './_Routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Routes />
      </Switch>
      <ToastContainer />
    </div>
  </BrowserRouter>
);

export default App;