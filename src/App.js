import {nanoid} from 'nanoid'
import {useState} from "react";
import Task from "./components/Task";
import "./App.css"

function App() {
    const [taskList, setTaskList] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    const handleKeyDown = (e) => {
        const trimmedValue = e.target.value.trim();
        if (trimmedValue && e.key === 'Enter') {
            setTaskList(prevState => [
                ...prevState,
                {
                    id: nanoid(),
                    task: e.target.value,
                    isDone: false,
                },
            ]);
            setCurrentTask("");
        }
    }

    const changeComplete = (currentId) => {
        setTaskList((prevState) =>
            prevState.map((prevNote) =>
                prevNote.id === currentId
                    ? {...prevNote, isDone: !prevNote.isDone}
                    : prevNote
            )
        );
    };

    const trashClick = (currentId) => {
        setTaskList((prevState) => {
            let newTaskList = [];
            for (let i = 0; i < prevState.length; i++) {
                if (prevState[i].id !== currentId) {
                    newTaskList.push(prevState[i]);
                }
            }
            return newTaskList;
        });
    }


    return (
        <div className="App">
            <h1 className="title">To-Do List</h1>
            <input className="task-input" type="text" placeholder="Enter your task..." value={currentTask}
                   onChange={(e) => setCurrentTask(e.target.value)}
                   onKeyDown={handleKeyDown}/>
            {taskList.length > 0 ?
                <div>
                    {taskList.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            taskText={task.task}
                            isDone={task.isDone}
                            changeComplete={changeComplete}
                            trachClick={trashClick}
                        />
                    ))}
                </div>
                :
                <div className="empty-tasks">
                    <img className="no-task-img" src='./no-task.png' alt="No task"/>
                    <p>There are no tasks</p>
                </div>
            }

        </div>
    )
}

export default App;