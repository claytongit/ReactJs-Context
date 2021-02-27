
import { useCount } from '../context/Count';
import { useText } from '../context/TextContext';

export default function Counte(){

    const { count, setCount } = useCount();
    const { text, setText } = useText();

    function handleSuccesse(){
        setCount(count + 1);
        setText('Funcionou');
    }

    return(
        <div>
            <span>
                <p>{ text }</p>
                <b>Count: </b>{count}
            </span>

            <br />

            <button onClick={ handleSuccesse } >Increment</button>
            
        </div>
    )
}