enum ACTION_TYPE {
    CHANGE_MODE = 'CHANGE_MODE',
    RESET = "RESET",
    INCREMENT = "INCREMENT",
    SET = "SET",
    SET_MAX_VALUE = "SET-MAX-VALUE",
    SET_START_VALUE = "SET-START-VALUE",

}

type ActionsType =
    ReturnType<typeof IncrementAC> |
    ReturnType<typeof ResetAC> |
    ReturnType<typeof SetAC> |
    ReturnType<typeof SetMaxValueAC> |
    ReturnType<typeof SetStartValueAC> |
    ReturnType<typeof changeMode>


export const initialState = {
    value: 0,
    maxValue: 1,
    startValue: 0,
    mode: 'counter'
}
export type InitialStateType = typeof initialState

export const counterReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.INCREMENT:
            if (state.value < state.maxValue) {
                return {
                    ...state, value: state.value + 1
                }
            } else {
                return state
            }
        case ACTION_TYPE.RESET:
            return {
                ...state, value: action.value - 1
            }
        case ACTION_TYPE.SET:
            return {
                ...state,
                maxValue: action.maxValue,
                startValue: action.startValue,
                value: action.startValue
            }
        case ACTION_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }

        case "SET-START-VALUE":

            return {
                ...state,
                startValue: action.startValue
            }
        case ACTION_TYPE.CHANGE_MODE:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}


export const IncrementAC = () => {
    return {
        type: ACTION_TYPE.INCREMENT,
    } as const
}

export const ResetAC = (value: number) => {
    return {
        type: ACTION_TYPE.RESET,
        value,
    } as const
}
export const SetAC = (startValue: number, maxValue: number) => {
    return {
        type: ACTION_TYPE.SET,
        startValue,
        maxValue
    } as const
}

export const SetMaxValueAC = (maxValue: number) => {
    return {
        type: ACTION_TYPE.SET_MAX_VALUE,
        maxValue,
    } as const
}

export const SetStartValueAC = (startValue: number) => {
    return {
        type: ACTION_TYPE.SET_START_VALUE,
        startValue,
    } as const
}
export const changeMode = (mode: 'settings' | 'counter') => {
    return {
        type: ACTION_TYPE.CHANGE_MODE,
        payload: mode
    } as const
}



