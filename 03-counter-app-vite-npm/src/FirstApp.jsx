//import {Fragment} from 'react'

import PropTypes from 'prop-types';

const Message = 'Salcedo';

const MessageObject = {
    message: 'Im an object',
    id: 'Id of an object'
}

const getResult = () => {
 return 2*2;
}

export const FirstAppFunc = ({ title , numberC }) => {

    return (
        //Always return a father node. Fragment
        <>
        <h1>Martin {Message}</h1>
        <p>Im a subtitle</p>
        <h1>{MessageObject.message}</h1>
        <h1>{JSON.stringify(MessageObject)}</h1>
        <h1>{getResult()}</h1>
        <h1>{title}</h1>
        <h1>{numberC + 1}</h1>
        </>
    )
}

FirstAppFunc.propTypes = {
    title: PropTypes.string.isRequired,
    numberC: PropTypes.number
}

FirstAppFunc.defaultProps = {
    title: 'No title',
    numberC: 987
}