import { ADD_ITEM_BASKET, CLEAR_BASKET } from '../constants/action-types';

const initialState = {
    items: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_BASKET: {
            return {...state, items: state.items.concat(action.payload)}
        }
        case CLEAR_BASKET: {
            return {...state, items: []}
        }
        default:
            break;
    }
    return state;
};

export default rootReducer;
