import React, { useContext } from 'react';
import { TasksContext, actions } from './services/task-service';

const ComponentB = () => {
  console.log('Rerender B...');
  const [ { tasks }, dispatch ] = useContext(TasksContext);
  return <div>Component B
  {tasks.join(', ')}
  <button onClick={() => { dispatch(actions.addTaskAsync('c')); }}>CHANGE</button></div>
};
export default ComponentB;
