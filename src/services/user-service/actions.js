const ActionTypes = {
  SET_USER: 'UserService.SET_USER',
}

// Example simple action

const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    user
  }
}
// Example thunks action

const setUserTimeout = () => {
  return (dispatch, user) => {
    setTimeout(() => {
      dispatch(setUser({ name: `Juan ${user.name}`}));
    }, 1000);
    setTimeout(() => {
      dispatch(setUser({ name: `Perez ${user.name}`}));
    }, 3000);
  }
}

const actions = {
  setUser,
  setUserTimeout,
}

export { ActionTypes, actions }