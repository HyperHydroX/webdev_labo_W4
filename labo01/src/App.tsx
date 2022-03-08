import AppContainer from './components/AppContainer'
import AppRow from './components/AppRow'
import TodoAppHeader from './components/TodoAppHeader'
import TodoInput from './components/TodoInput'

function App() {
  return (
    <main>
      <AppContainer>
        <AppRow>
          <TodoAppHeader></TodoAppHeader>
          <TodoInput />
        </AppRow>
      </AppContainer>
    </main>
  )
}

export default App
