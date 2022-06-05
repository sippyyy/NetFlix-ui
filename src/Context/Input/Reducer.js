import {SET_JOB} from './constant'

const initState={
    value:''
}

const reducer = (initState,action)=>{
    switch(action.type){
        case SET_JOB:
        return{
            value:action.payload
        }
        default:
            throw new Error('invalid error')
    }
}
export default reducer
export {initState}