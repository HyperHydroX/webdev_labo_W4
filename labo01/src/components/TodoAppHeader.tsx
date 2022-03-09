import '../style/components/todo-header.scss'

const TodoAppHeader = () => {
  let counter: number = 3
  return (
    <header className="c-todo-app-header">
      <h1 className="c-todo-app-header__title">Hello Hyper</h1>
      <h2 className="c-todo-app-header__subtitle">
        there are {counter} todos.
      </h2>
    </header>
  )
}

export default TodoAppHeader
