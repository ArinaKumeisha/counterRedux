import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {IncrementAC, ResetAC, SetAC, SetMaxValueAC, SetStartValueAC} from './Redux-store/counter-reducer';
import {AppStateType} from './Redux-store/store';
import {Display} from "./Display/Display";
import {Settings} from './Settings/Settings';


export const App = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStateType, number>((state) => state.counter.value)
    const startValue = useSelector<AppStateType, number>((state) => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>((state) => state.counter.maxValue)


    const inCorrect =
        maxValue < startValue ||
        maxValue < 0 || startValue < 0 ||
        maxValue === startValue

    const increment = () => {
        dispatch(IncrementAC())
    }
    const reset = (counter: number) => {
        dispatch(ResetAC(counter))
    }

    const set = (startValue: number, maxValue: number) => {
        dispatch(SetAC(startValue, maxValue))

    }


    const maxValueHandler = (maxValue: number) => {
        dispatch(SetMaxValueAC(maxValue))
    }


    const startValueHandler = (startValue: number) => {
        dispatch(SetStartValueAC(startValue))
    }

    return (

        <div className={'App'}>

            <Settings
                inCorrect={inCorrect}
                startValue={startValue}
                maxValue={maxValue}
                set={set}
                maxValueHandler={maxValueHandler}
                startValueHandler={startValueHandler}
            />
            <Display
                inCorrect={inCorrect}
                value={value}
                startValue={startValue}
                maxValue={maxValue}
                increment={increment}
                reset={reset}
            />


        </div>
    )

}


