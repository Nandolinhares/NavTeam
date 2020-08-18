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

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route 
              exact 
              path="/"
              component={Home}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
