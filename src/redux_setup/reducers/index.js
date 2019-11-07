import { ADD_ITEM_BASKET } from '../constants/action-types';

const initialState = {
    items: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_BASKET: {
            return {...state, items: state.items.concat(action.payload)}
        }
    }
    return state;
};

export default rootReducer;
