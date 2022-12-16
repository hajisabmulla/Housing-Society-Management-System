import React,{useContext} from 'react'
import AlertContext from '../Context/alertContext'
import {v4} from 'uuid'
const Alert = () => {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext
    return (
            alert.length > 0 && <div>
                {
                    alert.map(msg => <div key= {v4()} className={'alert all-center mx-2 bg-' + msg.type}>{msg.msg}</div> )
                }
            </div>
        
    )
}

export default Alert