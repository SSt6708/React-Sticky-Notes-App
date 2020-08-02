import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes";
import CreateArea from "./CreateArea";


function App(){
    const [listNote, setListNote] = useState([]);

    function addNote(note){
        setListNote( prevNote => {
            return [...prevNote, note];
        });
    }


    function deleteNote(id){

       setListNote(prevNote => {

            return (
                prevNote.filter((item, index)=> {
                    return index !== id;
                })
            );

        });

    }

    return (
    <div>
        <Header/>
        <CreateArea onAdd={addNote}/>
        
        {listNote.map((item, index) => (
            <Note 
                key={index}
                id={index}
                note={item}
                onDelete={deleteNote}
                FadeIn={item.deleted}
            />))}    
        
        <Footer/>
    </div>
    );
}

export default App;