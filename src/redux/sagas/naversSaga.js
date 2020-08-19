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
        console.error(err);
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
        console.error(errors);
        yield put({ type: 'SET_ERRORS', payload: errors })
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher createNaver
export function* watchCreateNaver() {
    yield takeLatest('CREATE_NAVER_SAGA', createNaverSaga)
}