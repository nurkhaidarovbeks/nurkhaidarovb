import TodoList from './ToDoList.jsx'

export default function App() {
    return (
        <div style={{padding: 24, maxWidth: 720, margin: '0 auto', fontFamily: 'system-ui, sans-serif'}}>
            <h1>TodoList</h1>
            <TodoList />
        </div>
    )
}