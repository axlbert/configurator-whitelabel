import { ADD_MACHINE } from '../constants/action-types';

const initialState = {
    machines: []
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_MACHINE) {
        return Object.assign({}, state, {
            machines: state.machines.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;
