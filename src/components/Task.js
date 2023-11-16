import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Task.css"
function Task(props) {
    return (
        <div className="task-row">
            <input type="checkbox" onChange={() => props.changeComplete(props.id)} />
            <p className={props.isDone && "strike-through"}>{props.taskText}</p>
            <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={() => props.trachClick(props.id)} />
        </div>
    )
}

export default Task;