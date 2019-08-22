import React, { useReducer } from 'react';

const thunk = (reducer, state, action) => {
  if(typeof action === "function") { // For thunk 
    action((subAction) => thunk(reducer, state, subAction), state);
  } else if(action.then) { // For promise (async)
    action.then((resolve) => { thunk(reducer, state, resolve); });
  } else { // For normal stuff
    reducer(action);
  }
}

const ServiceProvider = ({
  children,
  services
}) => {
  const Providers = services.map(Service => {
    const Component = ({ children }) => {
      const Provider = Service.Context.Provider;
      const [state, reducer] = useReducer(Service.reducer, Service.initialState);
      const dispatch = (action) => thunk(reducer, state, action);
      return <Provider value={[state, dispatch]}>{children}</Provider>
    }
    return Component;
  });
  let Services = children;
  for(const Provider of Providers) {
    Services = <Provider>{Services}</Provider>;
  }
  return Services;
}

export default ServiceProvider;