const INITIAL_STATE = {
  registers: [],
  pagination: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_REGISTERS':
      return { ...state, registers: action.payload, pagination: action.pagination };
    default: return state;
  }
}
