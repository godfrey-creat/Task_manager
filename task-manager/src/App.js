import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import TaskBoard from './components/TaskBoard';
import DepartmentManagement from './components/DepartmentManagement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/task-board" component={TaskBoard} />
        <Route path="/department-management" component={DepartmentManagement} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;

