import React, { useState } from 'react';
import './OutputSteps.css';
import { v4 as uuidv4 } from 'uuid';

function OutputSteps({ stepsList, deleteStep }) {
    stepsList.sort(function (a, b) {
        if (a.date > b.date) {
            return -1;
        }
        if (a.date < b.date) {
            return 1;
        }
    });
    const generateUnicKey = () => {
        return uuidv4();
    };

    return (
        <div className="outputContainer">
            {stepsList.map((element) => (
                <div className="element" key={generateUnicKey()}>
                    <div>{element.date}</div>
                    <div>{element.dist}</div>
                    <div onClick={() => deleteStep(element.date)}>X</div>
                </div>
            ))}
        </div>
    );
}

OutputSteps.defaultProps = {
    stepsList: [],
    deleteStep: () => { },
};

export default OutputSteps;