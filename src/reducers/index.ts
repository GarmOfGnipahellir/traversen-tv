import {
    RootAction,
    TICK_CLOCK,
    SHOW_UI,
    HIDE_UI,
} from '../actions';

export type RootState = {
    readonly date: Date,
    readonly isUiHidden: boolean,
};

export const initialState: RootState = {
    date: new Date(),
    isUiHidden: true,
};

const appReducer = (state: RootState = initialState, action: RootAction): RootState => {
    switch (action.type) {
        case TICK_CLOCK:
            return { ...state, date: new Date() };
        case SHOW_UI:
            return { ...state, isUiHidden: false };
        case HIDE_UI:
            return { ...state, isUiHidden: true };
        default:
            return state;
    }
}

export default appReducer;