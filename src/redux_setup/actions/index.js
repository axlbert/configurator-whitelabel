import { 
    ADD_ITEM_BASKET
} from '../constants/action-types';

export function addItemToBasket(payload) {
    return {type: ADD_ITEM_BASKET, payload};
};
