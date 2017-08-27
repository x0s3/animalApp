const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';


export function aumentar(value = 1) {
    return {
        type: COUNTER_INCREMENT,
        payload: value
    }
}

export function disminuir(value = 1) {
    return {
        type: COUNTER_DECREMENT,
        payload: value
    }
}


export const actions = {
    aumentar,
    disminuir
};

const ACTION_HANDLERS = {
    [COUNTER_INCREMENT]: (state, action) => { return Object.assign({}, state, { contador: state.contador + action.payload }) },
    [COUNTER_DECREMENT]: (state, action) => { return Object.assign({}, state, { contador: state.contador - action.payload }) }
};

const initialState = { contador: 0 };
export default function counterReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}