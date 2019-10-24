import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../navbar/navbar';
import './App.css';
import Home from './../pages/home';
import Account from '../pages/account'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <Router  basename="/salary-taxes/build">
            <ButtonAppBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/аccount" component={Account} />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}
export default App;


