import { ADD_ITEM_BASKET, CLEAR_BASKET, REMOVE_ITEM_BASKET } from '../constants/action-types';

const initialState = {
    items: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_BASKET: {
            return {...state, items: state.items.concat(action.payload)}
        }
        case REMOVE_ITEM_BASKET: {
            const startIndex = state.items.length - 1;
            const newArray = state.items.splice(-startIndex, 2);
            console.log(state.items, newArray)
            return {...state, items: state.items}
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
