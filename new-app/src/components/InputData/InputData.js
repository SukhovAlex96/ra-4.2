import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './InputData.css';

function InputData({ addStep }) {
    const [newDate, setNewDate] = useState('');
    const [newDist, setNewDist] = useState('');

    const handlerAddedData = () => {
        if (newDate !== '' && newDist !== '') {
            addStep(newDate, newDist);
            setNewDate('');
            setNewDist('');
            return;
        }
    };

    return (
        <div className="inputContainer">
            <input
                className="inputElement"
                type="text"
                value={newDate}
                onChange={(event) => setNewDate(event.target.value)}
            />
            <input
                className="inputElement"
                type="text"
                value={newDist}
                onChange={(event) => setNewDist(event.target.value)}
            />
            <button className="button" onClick={handlerAddedData}>
                ОК
            </button>
        </div>
    );
}

export default InputData;