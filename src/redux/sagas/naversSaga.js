import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

//Url
const backendUrl = 'https://navedex-api.herokuapp.com/v1';

//Worker getNavers
function* getNaversSaga() {
    try {
        yield put({ type: 'LOADING_UI' });
        const res = yield call(axios.get, `${backendUrl}/navers`);
        let navers = res.data;
        yield put({ type: 'SET_NAVERS', payload: navers });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher getNavers
export function* watchGetNavers() {
    yield takeLatest('GET_NAVERS_SAGA', getNaversSaga)
}

//Worker createNaver
function* createNaverSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        const res = yield call(axios.post, `${backendUrl}/navers`, action.payload);
        const message = "Naver criado com sucesso!"
        yield put({ type: 'POSITIVE_MESSAGES', payload: message });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        const errors = err.response.data;
        yield put({ type: 'SET_ERRORS', payload: errors })
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher createNaver
export function* watchCreateNaver() {
    yield takeLatest('CREATE_NAVER_SAGA', createNaverSaga)
}

//Worker showNaver
function* showNaverSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        const token = localStorage.AuthToken;
        axios.defaults.headers.common["Authorization"] = token;
        const res = yield call(axios.get, `${backendUrl}/navers/${action.payload}`);
        let naver = res.data;
        yield put({ type: 'SET_ACTIVE_NAVER', payload: naver });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        const errors = err.response.data;
        yield put({ type: 'SET_ERRORS', payload: errors })
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher showNaver
export function* watchShowNaver() {
    yield takeLatest('SHOW_NAVER_SAGA', showNaverSaga)
}

//Worker deleteNaver
function* deleteNaverSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        const res = yield call(axios.delete, `${backendUrl}/navers/${action.payload}`);
        const message = "Deletado com sucesso";
        yield put({ type: 'POSITIVE_MESSAGES', payload: message });
        yield put({ type: "NAVER_DELETED", payload: message });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        const errors = err.response.data;
        yield put({ type: 'SET_ERRORS', payload: errors })
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher deleteNaver
export function* watchDeleteNaver() {
    yield takeLatest('DELETE_NAVER_SAGA', deleteNaverSaga)
}

//Worker updateNaver
function* updateNaverSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        const res = yield call(axios.put, `${backendUrl}/navers/${action.naverId}`, action.payload);
        const message = "Naver atualizado com sucesso!"
        yield put({ type: 'POSITIVE_MESSAGES', payload: message });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        const errors = err.response.data;
        yield put({ type: 'SET_ERRORS', payload: errors })
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher updateNaver
export function* watchUpdateNaver() {
    yield takeLatest('UPDATE_NAVER_SAGA', updateNaverSaga)
}