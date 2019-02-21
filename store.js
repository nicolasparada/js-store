export function createStore(state = undefined) {
    const fns = new Set()
    const getState = () => state
    const setState = withState => {
        const nextState = typeof withState === 'function' ? withState(state) : withState
        if (isPlainObject(state) && isPlainObject(nextState)) {
            Object.assign(state, nextState)
        } else {
            state = nextState
        }
        for (const fn of fns) {
            fn(state)
        }
    }
    /**
     * @param {function} fn
     */
    const subscribe = fn => {
        fns.add(fn)
        return () => {
            fns.delete(fn)
        }
    }
    return { getState, setState, subscribe }
}

function isPlainObject(x) {
    return typeof x === 'object' && x !== null && !Array.isArray(x)
}
