import './PinPad.css';

const PinPad = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <>
            <div className='display'>
                <input type='password' />
            </div>
            <div className='buttons'>
                {numbers.map((number) => (
                    <button key={number}>{number}</button>
                ))}
                <button>Del</button>
                <button>E</button>
            </div>

        </>
    );
};

export default PinPad;