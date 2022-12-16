import React,{useReducer} from 'react'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

const AlertState = (props) => {
    const initialState = [];
    const [state,dispatch] = useReducer(AlertReducer,initialState)
    const setAlert = (msg,type,timeout=5000) => {
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
        })

        setTimeout(()=>{
            dispatch({type:REMOVE_ALERT})
        },timeout)
    }
    return (
        <AlertContext.Provider
            value={{
                alert:state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
