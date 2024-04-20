import React, { useState } from 'react';
import InputData from '../InputData/InputData';
import OutputSteps from '../OutputSteps/OutputSteps';
import './StepsContainer.css';

function StepsContainer() {
    const [steps, setSteps] = useState([]);


    const handlerAddStep = (date, dist) => {
        const transformSteps = [...steps];
        const findElem = transformSteps.find(elem => elem.date === date);
        if (findElem) {
            findElem.dist = Number(findElem.dist) + Number(dist);
            setSteps(transformSteps);
        } else {
            const newElem = {
                date: date,
                dist: dist
            }
            setSteps(prevSteps => [...prevSteps, newElem]);
        }
    };

    const handlerDeleteStep = (value) => {
        setSteps(prevSteps => prevSteps.filter((element) => element.date !== value));
    };

    return (
        <div className="wrapperContainer">
            <div className="contentContainer">
                <span className="headerElement">Дата (ДД.ММ.ГГ)</span>
                <span className="headerElement">Пройдено км</span>
                <span className="headerElement"></span>
            </div>
            <InputData addStep={handlerAddStep} />
            <div className="contentContainer">
                <span className="headerElement">Дата (ДД.ММ.ГГ)</span>
                <span className="headerElement">Пройдено км</span>
                <span className="headerElement">Действия</span>
            </div>
            <OutputSteps stepsList={steps} deleteStep={handlerDeleteStep} />
        </div>
    );
}

export default StepsContainer;