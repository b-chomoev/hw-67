import './PinPad.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {add, checkPin, deleteLastElement} from "./pinpadSlice.ts";

const PinPad = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.pinpad.value);

    const onAddButton = (digit: string) => {
        dispatch(add(digit));
    };

    const onDeleteButton = () => {
        dispatch(deleteLastElement());
    };

    const onCheckPin = () => {
        dispatch(checkPin());
    }

    return (
        <>
            <div className='display' style={{padding: '20px', textAlign: 'center',}}>
                <p>{'*'.repeat(value.length)}</p>
            </div>
            <hr/>
            <div className='buttons'>
                {numbers.map((number) => (
                    <button key={number} onClick={() => onAddButton(number)}>
                        {number}
                    </button>
                ))}
                <button onClick={onDeleteButton}>Delete</button>
                <button onClick={onCheckPin}>E</button>
            </div>

        </>
    );
};

export default PinPad;