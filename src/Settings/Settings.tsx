import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {changeMode} from "../Redux-store/counter-reducer";
import './Settings.css'
import {SettingsOfButton} from "../SettingsOfButton/SettingsOfButtons";


type SettingsType = {
    startValue: number
    maxValue: number
    maxValueHandler: (maxValue: number) => void
    startValueHandler: (startValue: number) => void
    set: (startValue: number, maxValue: number) => void
    inCorrect: boolean

}


export const Settings: React.FC<SettingsType> = props => {
    const {
        maxValueHandler,
        startValueHandler,
        set,
        inCorrect,
        startValue,
        maxValue,

    } = props;

    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValueHandler(+e.currentTarget.value)
        dispatch(changeMode('settings'))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startValueHandler(+e.currentTarget.value)
        dispatch(changeMode('settings'))
    }

    return (
        <div className={"containerSettings"}>
            <h3>MaxValue</h3>

            <input type={"number"}
                   value={maxValue}
                   onChange={onChangeMaxValueHandler}
                   className={inCorrect ? 'error' : 'input'}
            />


            <h3>StartValue</h3>

            <input type={"number"}
                   value={startValue}
                   onChange={onChangeStartValueHandler}
                   className={inCorrect ? 'error' : 'input'}/>

            <SettingsOfButton
                set={set}
                inCorrect={inCorrect}
                startValue={startValue}
                maxValue={maxValue}

            />
        </div>

    );
};

