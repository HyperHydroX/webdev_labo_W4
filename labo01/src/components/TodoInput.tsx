import '../style/components/todo-input.scss'
import { Plus } from 'lucide-react'
const TodoInput = () => {
  return (
    <div className="c-todo-input">
      <p>Todo input</p>
      <div className="c-todo-input__container">
        <button className="c-todo-input__button">
          <Plus className="c-todo-input__icon" />
        </button>
        <input
          type="text"
          name=""
          id=""
          placeholder="What needs to be done"
          className="c-todo-input__input"
        />
      </div>
      <select
        name="catergories"
        id="categories"
        className="c-todo-input__dropdown"
      >
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
      </select>
    </div>
  )
}

export default TodoInput
