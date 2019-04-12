import TodoController from './controllers/TodoController.js'

const main = () => TodoController.render()

document.addEventListener('DOMContentLoaded', main, false);