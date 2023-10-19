import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
  
  const [notes, setNotes] = useState([]);

    useEffect(() =>{
    fetch("http://localhost:5000/note")
    .then((res)=> 
    {
      if(res.status == 404){
        return;
      }
      return res.json()
    })
    .then((data)=> {
      if(data){
        return setNotes(data)
      }
      else{
        return;
      }
      
    })
    .catch((err)=> console.log(err));
  },[])

    function addNote(newNote) {
      fetch("http://localhost:5000/note",{
        method: "POST",
        body: JSON.stringify({
          title: newNote.title,
          description: newNote.description,   
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(response=>response.json())
      .then(data =>{
        setNotes(prevNotes => {
          console.log(prevNotes);
          return [...prevNotes, data];
        });
      })  
  }

    function deleteNote(id) {
    fetch(`http://localhost:5000/note/${id}`,{
        method: "DELETE",
      })
      .then(response=>response.json())
      .then(() =>{

        setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      });
    });

      })
  }

    return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.description}
            onDelete={deleteNote}
          />
        );
      })
      }
      <Footer />
    </div>
  );

}

export default App;
