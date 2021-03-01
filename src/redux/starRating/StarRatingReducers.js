import {starRatingConstants} from './StarRatingConstants';

const initialState={
    value:null
};


export function starReducer(state = initialState, action){
    switch(action.type){
        case starRatingConstants.save:
            return action.payload;
        default:
            return state;
    }
} 




