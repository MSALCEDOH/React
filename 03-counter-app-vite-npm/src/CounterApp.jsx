import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ( { value }) => {


    const [ counter, setCounter ] = useState (value);

    const Add = () => setCounter( counter + 1);    

    const Remove = () => setCounter(counter - 1);    

    const ResetFunc = () => setCounter(value);

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ Add }>+1</button>
        <button onClick={ Remove }>-1</button>
        <button onClick={ ResetFunc }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

