# JavaScript Store

Simple state container for your daily use 😊

Shipped like an ES module. Load it with `<script type=module>`.

## Example

```js
import { createStore } from 'https://unpkg.com/@nicolasparada/store@0.1.0/store.js'

const store = createStore(0)

console.log('initial count:', store.getState())
store.subscribe(count => {
    console.log('count:', count)
})

store.setState(c => c + 1)
store.setState(c => c + 1)
store.setState(c => c + 1)
```
