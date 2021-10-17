import React, { useState, useEffect, useReducer } from 'react';

const SettingsPage = (props) => {
    const [count, setCount] = useState(0);
    const logging = (gg) => {
        console.log({count: `1`},count);
    }

    useEffect(() => {
        logging(123)
    }, [logging]);
    useEffect(() => {
        logging(234)
    }, [logging]);
    return(
        <div>dddd</div>
    )
};



export default SettingsPage;