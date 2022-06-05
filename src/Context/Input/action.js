import {SET_JOB} from './constant'

export const setJob = payload =>(
    {
        type: SET_JOB ,
        payload
    }
)