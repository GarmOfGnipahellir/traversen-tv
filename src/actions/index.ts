export const TICK_CLOCK = 'TICK_CLOCK';
export const SHOW_UI = 'SHOW_UI';
export const HIDE_UI = 'HIDE_UI';

export type Actions = {
    TICK_CLOCK: {
        type: typeof TICK_CLOCK,
    },
    SHOW_UI: {
        type: typeof SHOW_UI,
    },
    HIDE_UI: {
        type: typeof HIDE_UI,
    },
};

export const actionCreators = {
    tickClock: (): Actions[typeof TICK_CLOCK] => ({
        type: TICK_CLOCK,
    }),
    showUi: (): Actions[typeof SHOW_UI] => ({
        type: SHOW_UI,
    }),
    hideUi: (): Actions[typeof HIDE_UI] => ({
        type: HIDE_UI,
    }),
}

export type RootAction = 
    | Actions[keyof Actions];