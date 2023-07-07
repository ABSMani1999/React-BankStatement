import { createContext } from "react";

export const Context = createContext();

export const InitialState = {
    arr : [],
    amount : 500
}

export const Reducer = (InitialState,action) =>{
    switch(action.type){
        case 'addobj': {
            return {
                ...InitialState,
                arr : action.payload
            }
        }
        case 'removeobj': {
            return {
                ...InitialState,
                arr : action.payload
            }
        }
        case 'balance': {
            return {
                ...InitialState,
                amount : action.payload
            }
        }
        default :
        return InitialState
    }
    
}


  