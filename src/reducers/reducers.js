import {VisibilityFilters} from '../actions/actions.js'
import {combineReducers} from 'redux'
import {map} from 'ramda'



// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// }


function todo(state = [],action){
  switch (action.type)
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map( (todo,index) => {
        if(action.index === index){
          return Object.assign({},todo,{
            completed: !todo.completed
          })
        }
        return todo
      })
    default: return state
}

function visibilityFilter(state = 'SHOW_ALL',action){
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default: return state
  }
}


// function todoApp(state = {},action){
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter,action),
//     todos: todos(state.todos,action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
