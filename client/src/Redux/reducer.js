import { DEFAULT } from "./actions";

const initiaState = {
  estadoprueba: [],
};

function rootReducer(state = initiaState, action) {
  switch (action.type) {
    case DEFAULT:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
