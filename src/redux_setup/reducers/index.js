import { 
    ADD_ITEM_BASKET, 
    CLEAR_BASKET, 
    REMOVE_ITEM_BASKET,
    REMOVE_ITEM_BYOBJECT
} from '../constants/action-types';

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
            state.items.splice(startIndex, 1);
            return Object.assign({}, state, {items: state.items});
        }
        case REMOVE_ITEM_BYOBJECT: {
            const newArray = state.items.filter((item) => {
                return item.name !== action.payload.name;
            });
            return {...state, items: newArray}
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
