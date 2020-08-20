import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

//Url
const backendUrl = 'https://navedex-api.herokuapp.com/v1';

function setHeaderAuthorization(token) {
    let AuthToken = `Bearer ${token}`;
    localStorage.setItem('AuthToken', AuthToken);
    axios.defaults.headers.common['Authorization'] = AuthToken;
}

//Worker Login
function* loginSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        const res = yield call(axios.post, `${backendUrl}/users/login`, action.payload);
        let token = res.data.token;
        setHeaderAuthorization(token);
        let userInformation = res.data;
        yield put({ type: 'SET_USER', payload: userInformation });
        yield put({ type: 'CLEAR_LOADING_UI' });
        //Atualizar a página
        window.location.reload(false);
    }
    catch(err) {
        const errors = err.response.data;
        yield put({ type: 'SET_ERRORS', payload: errors })
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher Login
export function* watchLogin() {
    yield takeLatest('LOGIN_SAGA', loginSaga)
}

function* logoutUserSaga() {
    yield put({ type: 'LOADING_UI' });
    localStorage.removeItem('AuthToken');
    delete axios.defaults.headers.common['Authorization'];
    yield put({ type: 'SET_UNAUTHENTICATED' });
    yield put({ type: 'CLEAR_LOADING_UI' });
    window.location.href = "/";
    window.location.reload(false);
}

//Remover token do local storage
export function* watchLogoutUser() {
    yield takeLatest('LOGOUT_USER', logoutUserSaga);
}