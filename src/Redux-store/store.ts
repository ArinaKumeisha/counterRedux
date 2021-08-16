import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/local.storage";

const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

const persistedState = loadState();

export let store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

store.subscribe(() => {
    localStorage.setItem("currentState", JSON.stringify(store.getState()))

})

//@ts-ignore
window.store = store
