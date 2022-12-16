const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';

const alertReducer =(state,action) => {
    switch(action.type){
        case SET_ALERT:
            return [...state,action.payload]
        case REMOVE_ALERT:
            return []
        default:
            return state
    }
}

export default alertReducer