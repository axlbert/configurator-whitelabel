import { ADD_MACHINE, ADD_SUSPENSION } from '../constants/action-types';

const initialState = {
    trailer: {},
    suspension: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MACHINE: {
            return {...state, trailer: action.payload}
        }
        case ADD_SUSPENSION: {
            return {...state, suspension: action.payload}
        }
    }
    return state;
};

export default rootReducer;
