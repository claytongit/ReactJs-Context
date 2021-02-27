import { createContext, useState, useContext } from 'react';

const textContext = createContext();

export default function TextContextProvider({ children }){

    const [ text, setText ] = useState();

    return(
        <textContext.Provider
            value={{ text, setText, }}
        >
            { children }
        </textContext.Provider>
    );

}

export function useText(){
    const context = useContext(textContext);
    const { text, setText } = context;
    return { text, setText };
}