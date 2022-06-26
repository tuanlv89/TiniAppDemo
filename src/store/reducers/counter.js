const initState = {
    count: 0
}

export default function counter(state = initState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count +( action.step || 1) }
        case 'DECREMENT':
            return {...state, count: state.count -( action.step || 1) }
        default: return state;
    }
}