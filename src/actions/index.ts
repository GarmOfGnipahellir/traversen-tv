export const TICK_CLOCK = 'TICK_CLOCK';

export type Actions = {
    TICK_CLOCK: {
        type: typeof TICK_CLOCK,
    },
};

export const actionCreators = {
    tickClock: (): Actions[typeof TICK_CLOCK] => ({
        type: TICK_CLOCK,
    }),
}

export type RootAction = 
    | Actions[keyof Actions];