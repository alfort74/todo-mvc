class Todo {
    constructor({ id, name, done }) {
      this.parent = document.querySelector('.todos')
      this.element = document.createElement('li')
      this.element.className = 'todo-item'
      // TODO: XSS対策
      this.element.innerHTML = `
        <label class="todo-toggle__container">
          <input
            data-todo-id="${id}"
            type="checkbox"
            class="todo-toggle"
            value="checked"
          />
          <span class="todo-toggle__checkmark"></span>
        </label>
        <div class="todo-name">${name}</div>
        <div data-todo-id="${id}" class="todo-remove-button">x</div>
      `
    }
  
    mount() {
      this.parent.appendChild(this.element)
      this.element.addEventListener('change', () => console.log('checkされたよ!'))
    }
  }
  
  export default Todo