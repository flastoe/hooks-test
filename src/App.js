import React from 'react';
import './App.css';
import UserComponent from './UserComponent';
import TaskComponent from './TaskComponent';
import ServiceProvider from './services';

import UserService from "./services/user-service";
import TasksService from './services/task-service';

const services = [
  UserService,
  TasksService
]

function App() {
  return (
    <ServiceProvider services={services}>
      <div className="App">
        <div>
          <UserComponent />
          <TaskComponent />
        </div>
      </div>
    </ServiceProvider>
  );
}

export default App;
