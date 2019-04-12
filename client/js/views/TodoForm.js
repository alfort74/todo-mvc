import TodoController from '../controllers/TodoController.js'

class TodoForm {
  constructor() {
    this.elements = document.querySelector('.todo-form')
  }

  mount() {
    this.elements.addEventListener('submit', event => {
      event.preventDefault()
      const todoName = event.target.querySelector('.todo-form__input').value
      event.target.querySelector('.todo-form__input').value = ''
      TodoController.create(todoName)
    })
  }
}

export default TodoForm