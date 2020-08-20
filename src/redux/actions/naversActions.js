//getNavers
export const getNavers = () => {
    return { type: 'GET_NAVERS_SAGA' }
}

//createNaver
export const createNaver = (naver) => {
    return { type: 'CREATE_NAVER_SAGA', payload: naver }
}

//showNaver
export const showNaver = (naverId) => {
    return { type: 'SHOW_NAVER_SAGA', payload: naverId }
}

//deleteNaver
export const deleteNaver = (naverId) => {
    return { type: 'DELETE_NAVER_SAGA', payload: naverId }
}

//updateNaver
export const updateNaver = (naver, naverId) => {
    return { type: 'UPDATE_NAVER_SAGA', payload: naver, naverId: naverId }
}