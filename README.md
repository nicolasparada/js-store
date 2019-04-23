# JavaScript Store

Simple state container for your daily use in 400 bytes 😊

Shipped like an ES module. Load it with `<script type=module>`.

## Example

```js
import { createStore } from 'https://unpkg.com/@nicolasparada/store@0.4.0/store.js'

const store = createStore(0)

console.log('initial count:', store.getState())
const unsubscribe = store.subscribe(count => {
    console.log('current count:', count)
})

store.setState(1) // Set to 1.
store.setState(c => c + 1) // Increment current value.
```
