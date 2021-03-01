import {starRatingConstants} from './StarRatingConstants'


export function saveStarRating(payload) {
    return {
        type: starRatingConstants.save,
        payload
    }
}