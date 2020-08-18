import { all } from 'redux-saga/effects';
//Sagas
import { watchLogin, watchLogoutUser } from './authenticationSaga';
export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLogoutUser(),
    ]);
  }