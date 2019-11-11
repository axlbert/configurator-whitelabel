import { 
    ADD_ITEM_BASKET,
    REMOVE_ITEM_BASKET,
    REMOVE_ITEM_BYOBJECT,
    CLEAR_BASKET
} from '../constants/action-types';

export function addItemToBasket(payload) {
    return {type: ADD_ITEM_BASKET, payload};
};

export function removeItemFromBasket(payload) {
    return {type: REMOVE_ITEM_BASKET, payload}
}

export function removeItemByObject(payload) {
    return {type: REMOVE_ITEM_BYOBJECT, payload}
}

export function clearBasket() {
    return {type: CLEAR_BASKET}
}
