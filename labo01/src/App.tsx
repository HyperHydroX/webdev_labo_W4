import AppContainer from './components/AppContainer'
import AppRow from './components/AppRow'
import TodoAppHeader from './components/TodoAppHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

function App() {
  const dummy_data = ''

  return (
    <main>
      <AppContainer>
        <AppRow>
          <TodoAppHeader></TodoAppHeader>

          <TodoInput />

          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </AppRow>
      </AppContainer>
    </main>
  )
}

export default App
