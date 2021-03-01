import {ActionConstants} from '../cart/CartConstants';

export function addToCart(payload) {
    return {
        type: ActionConstants.add,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: ActionConstants.remove,
        payload
    }
}

export function addToFavorite(payload) {
    return{
        type:ActionConstants.favorite,
        payload
    }
}