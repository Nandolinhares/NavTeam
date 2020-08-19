import React from 'react';
import './App.css';
//Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
//Redux
import store from './redux/store';
import { Provider } from 'react-redux';

//Pages
import Home from './pages/Home';
import AddNaver from './pages/AddNaver';

//Components
import Navbar from './components/Navbar';

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
            />
            <Route 
              exact
              path="/cadastrar"
              component={AddNaver}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
