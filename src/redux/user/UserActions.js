import { signInWithGoogle, signOut ,signInWithFacebook} from '../../apis/firebase/firebase';
import {UserActionConstants} from './UserConstants';
function startLoading() {
    return {
        type: UserActionConstants.start
    }
}
function updateUserData(payload) {
    return {
        type: UserActionConstants.update,
        data: payload
    }
}
function updateUserError(payload) {
    return {
        type: UserActionConstants.error,
        error: payload
    }
}

export function loginUserUsingGoogle() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(user => {
            dispatch(updateUserData(user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}
export function loginUserUsingFacebook() {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithFacebook().then(user => {
            dispatch(updateUserData(user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());
        signOut().then(() => {
            dispatch(updateUserData({}));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}