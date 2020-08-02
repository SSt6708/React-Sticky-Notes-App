import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
function CreateArea(props){

    const [singleNote, setSingleNote] = useState({
        title:"",
        content:"",
        deleted: false
    });

    const [isExpand, setIsExpand] = useState(false);
    

    function handleChange(event){
        const {name, value} = event.target;
        setSingleNote((prevNote)=>{

            if(name==="title"){
                return {
                    title: value,
                    content: prevNote.content,
                    deleted: prevNote.deleted
                };
            }else if(name ==="content"){
                return {
                    title: prevNote.title,
                    content: value,
                    deleted: prevNote.deleted
                };
            }

        });
    }

    function addNote(event){
        props.onAdd(singleNote);
        setSingleNote({
            title:"",
            content:"",
            deleted: false
        });
        setIsExpand(false);
        event.preventDefault();
    }
    
    function expand(){
        setIsExpand(true);
    }


    return(
        <div>
          <form className="create-note">
            
            <input 
                onChange={handleChange} 
                onClick={expand}
                name="title" 
                placeholder="Title" 
                value={singleNote.title} 
            />
            
            <Collapse in={isExpand}>
                <textarea 
                    onChange={handleChange} 
                    name="content" 
                    placeholder="Take a note..." 
                    rows="3"
                    value={singleNote.content}  
                />
                <Zoom in={isExpand}>
                    <Fab onClick={addNote}><AddIcon/></Fab>
                </Zoom>
            </Collapse>
            
          </form>
        </div>
    );
}



export default CreateArea;