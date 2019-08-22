import React, { useContext } from 'react';
import { UserContext, actions } from './services/user-service';

const ComponentA = () => {
  const [ user, dispatch ] = useContext(UserContext);
  console.log('Rerender A...');
  return <div>
  Component A: {user.name}
  <button onClick={() => { dispatch(actions.setUserTimeout()); }}>CHANGE</button></div>
};
export default ComponentA;