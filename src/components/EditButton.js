import React, { useState } from 'react'

const EditButton = (props) => {

    const [newEdit, setNewEdit] = useState("");
    const olderArr = props.oldArr;
    const editID = props.whatToSet


    const handleEditChange = (event) => {
        setNewEdit(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.passUp(olderArr.map(el => el.uniqueID === editID ? {...el, whatToDo: newEdit} : el));
        props.reqEdit(false);
    }

    return (
        <div className='EditForm'>
            <form onSubmit={handleSubmit}>
                <input className="Inpt" value={newEdit} onChange={handleEditChange} autoFocus />
                <button className="AddB" onClick={handleSubmit}>Edit me</button>
            </form>
        </div>
  )
}

export default EditButton