import React from 'react';
import './App.css';
import jwtDecode from "jwt-decode";

//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
//Redux
import store from './redux/store';
import { Provider } from 'react-redux';

//Pages
import Home from './pages/Home';
import AddNaver from './pages/AddNaver';
import EditNaver from './pages/EditNaver';

//Components
import Navbar from './components/Navbar';
import AuthRoute from './utils/AuthRoute';

//Passando o authenticated pras authroutes
const token = localStorage.AuthToken;
let authenticated = false;
if(token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/";
  } else {
    authenticated = true;
  }
} 

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route 
              exact 
              path="/"
              component={Home}
              authenticated={authenticated}
            />
            <AuthRoute 
              exact
              path="/cadastrar"
              component={AddNaver}
              authenticated={authenticated}
            />
            <AuthRoute 
              exact
              path="/edit/:id"
              component={EditNaver}
              authenticated={authenticated}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
