class TodoModel {
    constructor({ id, name, done }) {
      this.id = id
      this.name = name
      this.done = done
    }

    update(id, done) {
        this.name = name
        this.name = done
    }
  }
  
  const TodoCollection = {
    todos: [],
  
    async read() {
      const resp = await fetch('/todos').then((res) => res.json())
      this.todos = resp.todos.map((todo) => {
        return new TodoModel({ ...todo })
      })
      return this.todos
    },
  
    async create(name) {
      const resp = await fetch('/todos', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ name }),
      }).then((res) => res.json())
      const newTodo = new TodoModel({ id: resp.id, name: resp.name })
      this.todos.push(newTodo)
      return newTodo
    },

    async update(id, done) {
        const target = this.todos.find(todo => todo.id === id)
        const resp = await fetch (`/todos/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ name: target.name, done })
        }).then((res) => res.json())
        target.update(resp.name, resp.done)
        return target
    },

    async delete(id) {
        const target = this.todos.find(todo => todo.id === id)
        const resp = await fetch (`/todos/${id}`, {
            method: 'DELETE',
        }).then((res => res))
        console.log(this.todos.findIndex(todo => todo.id === id))
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        console.log(this.todos)
        return target
    }
  }
  
  export default TodoCollection