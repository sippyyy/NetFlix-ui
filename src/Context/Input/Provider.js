import inputContext from '.';
import { useReducer } from 'react';
import reducer,{initState} from './Reducer';

function InputProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initState)
    return ( 
        <inputContext.Provider value={[state,dispatch]}>
            {children}
        </inputContext.Provider>
     );
}

export default InputProvider;