import {useEffect, useState} from 'react'

export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')

    const addTask = () => {
        const value = text.trim()
        if (!value) return
        setTasks(prev => [...prev, { id: Date.now(), text: value }])
        setText('')
    }

    useEffect(() => {
        if (tasks.length > 10) {
            alert('У вас больше чем 10 задач')
        }
    }, [tasks])

    const handleKeyDown = e => {
        if (e.key === 'Enter') addTask()
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: 8}}>
                <input
                    type="text"
                    placeholder="Введите задачу..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKeyDown}
                    style={{ flex: 1, padding: 8, border: '1px solid #ccc', borderRadius: 6 }}
                    />
                <button onClick={addTask} style={{ padding: '8px 14px', borderRadius: 6 }}>
                    Add Task
                </button>
            </div>


            <ul style={{ marginTop: 16, paddingLeft: 18, lineHeight: 1.6}}>
                {tasks.map(t => (
                    <li key={t.id}>{t.text}</li>
                ))}
            </ul>

            {text.trim() === '' && (
                <p style={{ color: '#888', marginTop: 8}}>Введите текст и нажмите "Add Task" или Enter</p>
            )}
            <p style={{marginTop: 8}}>Всего задач: {tasks.length}</p>
        </div>
    )
}