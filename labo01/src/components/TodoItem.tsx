import { Check } from 'lucide-react'
import '../style/components/todo-item.scss'

const TodoItem = () => {
  return (
    <div className="c-todo-item">
      <input
        type="checkbox"
        name="checkbox"
        id="check"
        className="c-todo-item-input"
      />
      <label htmlFor="check" className="c-todo-item-label">
        <Check className="c-todo-item-icon" />
      </label>
      <div className="c-todo-item-content">
        <p className="c-todo-item-text">Planten water geven.</p>
        <p className="c-todo-item-category">Work</p>
      </div>
    </div>
  )
}

export default TodoItem
