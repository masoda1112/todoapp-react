const reducer = (state=[], action) => {
    switch(action.type) {
      case 'POST':
       return [
        ...state,
        {
          task: action.task,
          isCompleted: false
        }
      ]
      default:
        return state
    }
  }
  
  export default reducer