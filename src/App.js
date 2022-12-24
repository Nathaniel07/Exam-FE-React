import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Portfolio from './pages/PortfolioPage/PortfolioPage.js';
import SumTwoNumbersPage from './pages/SumTwoNumbersPage/SumTwoNumbersPage.js';
import JavaScriptPage from './pages/JavaScriptSkillsPage/JavaScriptSkillsPage.js';
import CrudAppPage from './pages/CrudAppPage/CrudAppPage.js';
import Navbar from './layouts/Navbar/Navbar.js';
import AddBook from './features/CrudApp/AddBook/AddBook.js';
import SelectBook from './features/CrudApp/SelectBook/SelectBook.js';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/javascript-skills">
          <JavaScriptPage />
        </Route>
        <Route exact path="/sum-two-numbers">
          <SumTwoNumbersPage />
        </Route>
        <Route exact path="/crud-app">
          <CrudAppPage />
        </Route>
        <Route exact path="/crud-app/add-book">
          <AddBook />
        </Route>
        <Route exact path="/crud-app/book/:id">
          <SelectBook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
