import { useForm, router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';

export default function Index({ tasks }) {
    const { data, setData, post, reset, processing } = useForm({ title: '' });

    function addTask(e) {
        e.preventDefault();
        post('/tasks', { onSuccess: () => reset('title') });
    }

    function toggleTask(task) {
        router.patch(`/tasks/${task.id}`, { is_done: !task.is_done });
    }

    function deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            router.delete(`/tasks/${taskId}`);
        }
    }

    return (
        <>
            <Head title="Task Manager" />
            <div className="app-container">
                <header className="header">
                    <h1>Task Manager</h1>
                    <p>Stay organized, focused, and productive.</p>
                </header>

                <form className="task-form" onSubmit={addTask}>
                    <input
                        type="text"
                        className="task-input"
                        placeholder="What needs to be done?"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                        disabled={processing}
                    />
                    <button type="submit" className="task-submit" disabled={processing}>
                        {processing ? '...' : 'Add'}
                    </button>
                </form>

                {tasks.length > 0 ? (
                    <ul className="task-list">
                        {tasks.map((task) => (
                            <li key={task.id} className="task-item">
                                <div className="task-content">
                                    <div className="checkbox-wrapper">
                                        <input
                                            type="checkbox"
                                            className="task-checkbox"
                                            checked={task.is_done}
                                            onChange={() => toggleTask(task)}
                                        />
                                    </div>
                                    <span className={`task-title ${task.is_done ? 'done' : ''}`}>
                                        {task.title}
                                    </span>
                                </div>
                                <button
                                    className="btn-delete"
                                    onClick={() => deleteTask(task.id)}
                                    title="Delete task"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty-state">
                        <p>No tasks yet. Add one above!</p>
                    </div>
                )}
            </div>
        </>
    );
}
