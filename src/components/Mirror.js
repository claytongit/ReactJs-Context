
import { useCount } from '../context/Count';
import { useText } from '../context/TextContext';

export default function Mirror(){

    const { count } = useCount();
    const { text } = useText();

    return(
        <div>
            <span>
                <b>Mirror: { count }</b>
                <p>{ text }</p>
            </span>            
        </div>
    )
}