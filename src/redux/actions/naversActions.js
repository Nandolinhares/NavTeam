//getNavers
export const getNavers = () => {
    return { type: 'GET_NAVERS_SAGA' }
}

//createNaver
export const createNaver = (naver) => {
    return { type: 'CREATE_NAVER_SAGA', payload: naver }
}