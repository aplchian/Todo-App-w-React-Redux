
const {createStore} = require('redux')
const { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } = require('../actions/actions.js')
const todoApp = require('../reducers/reducers.js')


let store = createStore(todoApp)

let unsubscribe = store.subscribe( () => {
  console.log(store.getState())
})

store.dispatch(addTodo('Eat'))
// store.dispatch(addTodo('Gym'))
// store.dispatch(toggleTodo(0))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

console.log(store.getState())
