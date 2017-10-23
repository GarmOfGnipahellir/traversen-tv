import * as Redux from 'redux';
import { TICK_CLOCK } from '../actions';

export type State = {
    readonly date: Date,
};

export const initialState: State = {
    date: new Date(),
};

const appReducer = (state: State = initialState, action: Redux.Action): State => {
    switch (action.type) {
        case TICK_CLOCK:
            return {...state, date: new Date()};
        default:
            return state;
    }
}

export default appReducer;