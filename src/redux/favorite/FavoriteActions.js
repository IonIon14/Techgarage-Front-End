import {favoriteConstant} from './FavoriteConstants';


export function addToFavorite(payload){
    return{
        type:favoriteConstant.add,
        payload
    }
}