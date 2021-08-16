import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../Redux-store/store";
import "./Display.css"

type DisplayType = {
    increment: () => void
    reset: (counter: number) => void
    inCorrect: boolean
    value: number
    startValue: number
    maxValue: number
}
export const Display: React.FC<DisplayType> = props => {
    const {

        increment,
        value,
        startValue,
        maxValue,
        reset,
        inCorrect,
    } = props
    const mode = useSelector<AppStateType>(state => state.counter.mode)


    const importance = (
        inCorrect ? "Incorrect value" : `Enter values and enter "set"`
    )

    return (
        <div className={'containerDisplay'}>
            <h3 className={maxValue === value ?
                'valueError' : 'value'}>

                {mode === 'settings' && importance}
                {mode === 'counter' && value}
            </h3>
            <button onClick={() => increment()}
                    disabled={inCorrect || maxValue === value}
                    className={"button"}
            >increment
            </button>
            <button onClick={() => {
                reset(startValue + 1)
            }}
                    className={"button"}>reset
            </button>
        </div>
    );
};

