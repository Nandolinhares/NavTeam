import { all } from 'redux-saga/effects';
//Sagas
import { watchLogin, watchLogoutUser } from './authenticationSaga';
import { watchGetNavers, watchCreateNaver } from './naversSaga';
export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLogoutUser(),
        watchGetNavers(),
        watchCreateNaver(),
    ]);
  }