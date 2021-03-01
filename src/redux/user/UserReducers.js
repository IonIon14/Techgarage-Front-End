import {UserActionConstants} from './UserConstants';

const initialState = {
    data: {},
    loading: false,
    error: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActionConstants.start:
            return Object.assign({}, state, {
                loading: true
            });
        case UserActionConstants.update:
            return Object.assign({}, state, {
                data: action.data,
                loading: false
            });
        case UserActionConstants.error:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            })
        default:
            return state
    }
}