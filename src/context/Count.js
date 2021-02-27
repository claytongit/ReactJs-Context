import { createContext, useState, useContext } from 'react';

//Cria um contexto
const CountContext = createContext();

//Function do context (Obs: CountProvider tem que estar por volta dos elementos do arquivo App.js)
export default function CountProvider({ children }){

    const [ count, setCount ] = useState(0);

    return (
        <CountContext.Provider 
            value={{ count, setCount }} 
        >

        { children }
        
        </CountContext.Provider>
    )
}

//Cria um Hook do context
export function useCount(){

    const context = useContext(CountContext);

    const { count, setCount } = context;

    return { count, setCount };

}