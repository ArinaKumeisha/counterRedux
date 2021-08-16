import {AppStateType} from "../Redux-store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('currentState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('currentState', serializedState);
    } catch {
        // ignore write errors
    }
};

//логика сохранения еще есть в файле store

