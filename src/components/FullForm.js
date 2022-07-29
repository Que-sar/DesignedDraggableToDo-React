import React, { useState } from "react";
import EditButton from "./EditButton";
import "../styles/OnlyStyle.css";
import Draggable from "react-draggable";


const FullForm = () => {

    const [newTask, setNewTask] = useState("");
    const [taskID, setTaskID] = useState(0);
    const [toEdit, setToEdit] = useState(false);
    const [editID, setEditID] = useState(null);
    const [allTask, setAllTask] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newTask.trim() !== "" && newTask.length < 45){
            const toDoEvents = {
                whatToDo : newTask,
                uniqueID : taskID
            };
            setTaskID(prevtask => prevtask + 1);
            setAllTask(prevTasks => [...prevTasks, toDoEvents]);
            setNewTask("");
        }
        
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleDelete = (uniqueID) => {
        setAllTask(allTask.filter(aTask => aTask.uniqueID !== uniqueID));
    }

    const handleEdit = (uniqueID) => {
        setToEdit(true);
        setEditID(uniqueID);
    }

    return (
        <div className="container Tasks-Form">
            <div className="row TaskRow">
                {(!toEdit) ?
                <div className="Submit-Form">
                    <form onSubmit={handleSubmit}>
                            <input className="Inpt" value={newTask} onChange={handleChange} autoFocus />
                        <button className="AddB" onClick={handleSubmit}>To Do!</button>
                    </form>
                </div>
                : <EditButton passUp={setAllTask} whatToSet={editID} reqEdit={setToEdit} oldArr={allTask}/>}
            </div>
                        {allTask.map((aTask, index) =>
                        <Draggable>
                        <div className="row ListRow" key={aTask.uniqueID}>
                            <div className="col-7 ToDos">
                                {index+1 + ". " + aTask.whatToDo}
                            </div>
                            <div className="col-5">    
                                <button className="DeleteB" onClick={() => handleDelete(aTask.uniqueID)}>
                                    Delete me
                                </button>
                                <button className="EditB" onClick={() => handleEdit(aTask.uniqueID)}>
                                    Edit me
                                </button>
                            </div>
                        </div>
                        </Draggable>
                        )}
        </div>
    )

};


export default FullForm;




