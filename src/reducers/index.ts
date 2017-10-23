import { RootAction, TICK_CLOCK } from '../actions';

export type RootState = {
    readonly date: Date,
};

export const initialState: RootState = {
    date: new Date(),
};

const appReducer = (state: RootState = initialState, action: RootAction): RootState => {
    switch (action.type) {
        case TICK_CLOCK:
            return {...state, date: new Date()};
        default:
            return state;
    }
}

export default appReducer;