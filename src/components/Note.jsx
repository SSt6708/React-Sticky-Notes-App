import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Fade from '@material-ui/core/Fade';

function Note(props){
    const [deletePage, setDelete] = useState(false);
    function handleDelete(){
        props.note.deleted = true;
        setDelete(true);
        props.onDelete(props.id);
        
    }

    

    return (
        <Fade in={!props.note.deleted}>
            <div className = "note">
                <h1>{props.note.title}</h1>
                <p>{props.note.content}</p>
                <button onClick={handleDelete}><DeleteIcon/></button>

            </div>
            
        </Fade>
    );
}


export default Note;