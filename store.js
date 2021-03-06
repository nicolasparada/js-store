export function createStore(state = undefined) {
    let resolving = false
    const fns = new Set()
    const getState = () => state
    const setState = withState => {
        const nextState = typeof withState === 'function' ? withState(state) : withState
        if (isPlainObject(state) && isPlainObject(nextState)) {
            Object.assign(state, nextState)
        } else {
            state = nextState
        }
        if (resolving) {
            return
        }
        resolving = true
        Promise.resolve().then(() => {
            for (const fn of fns) {
                fn(state)
            }
            resolving = false
        })
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
