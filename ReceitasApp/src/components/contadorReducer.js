const INITIAL_STATE = {valorAtual: 0}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SOMAR':
            return {...state, valorAtual: action.valorSomado};
        case 'ZERAR':
            return {...state, valorAtual: INITIAL_STATE.valorAtual};
        default:
            return state;
    }
}