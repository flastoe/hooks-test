import React from 'react';

const ActionTypes = {
  ADD_TASK: 'TasksService.ADD_TASK'
}

const initialState = {
  tasks: [
    'a',
    'b',
  ]
};

const reducer = (state, action) => {
  switch(action.type) {
    case ActionTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    default:
      return state;
  }
}

// Example promise

const promiseSample = () => new Promise(function(resolve, reject) {
  console.log('Promise called');
  setTimeout(function() {
    if(Math.random() >= 0.5) {
      resolve('foo task');
    } else {
      reject('error task');
    }
  }, 1000);
});

// Example simple action

const addTask = (task) => {
  return {
    type: ActionTypes.ADD_TASK,
    task
  }
}

// Example Async action

const addTaskAsync = async () => {
  try {
    const task = await promiseSample();
    return {
      type: ActionTypes.ADD_TASK,
      task
    }
  } catch(e) {
    return {
      type: ActionTypes.ADD_TASK,
      task: e
    }
  }
  
}

const actions = {
  addTask,
  addTaskAsync,
}
const TasksContext = React.createContext([
  initialState,
  reducer
])

export { TasksContext, actions, ActionTypes };
export default {
  Context: TasksContext,
  reducer,
  initialState,
}
