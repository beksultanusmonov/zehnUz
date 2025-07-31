import { createContext, useReducer } from "react";
export const GlobalContext = createContext();
const initialState = {
    auth: false,
    book: false,
    group: false
}
const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case "ADD_BOOK":
            return {...state, book: payload}
        case "DELETE_BOOK":
            return {...state, book: false}
        case "ADD_GROUP":
            return {...state, group: payload}
        case "DELETE_GROUP":
            return {...state, group: false}
        default:
            return state
    }
}

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state); 
    return <GlobalContext.Provider value={{...state, dispatch}}>{children}</GlobalContext.Provider>
}
