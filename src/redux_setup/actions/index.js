import { 
    ADD_ITEM_BASKET,
    CLEAR_BASKET
} from '../constants/action-types';

export function addItemToBasket(payload) {
    return {type: ADD_ITEM_BASKET, payload};
};

export function clearBasket() {
    return {type: CLEAR_BASKET}
}
