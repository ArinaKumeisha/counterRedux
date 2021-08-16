import {changeMode} from "../Redux-store/counter-reducer";
import React from "react";
import {useDispatch} from "react-redux";


type ButtonSetType = {
    inCorrect: boolean
    startValue: number
    maxValue: number
    set: (startValue: number, maxValue: number) => void

}
export const SettingsOfButton: React.FC<ButtonSetType> = props => {
    const {
        inCorrect,
        startValue,
        maxValue,
    } = props

    const dispatch = useDispatch()
    return (
        <div>
            <button disabled={inCorrect}
                    className={"button"}
                    onClick={() => {
                        props.set(startValue, maxValue)
                        dispatch(changeMode('counter'))
                    }}
            >SET
            </button>
        </div>
    )
}