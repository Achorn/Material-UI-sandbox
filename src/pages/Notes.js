import { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch("http://localhost:8000/notes");
        const data = await response.json();
        if (response.ok) {
          setNotes(data);
        } else {
          console.log("error: ", data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNotes();
  }, []);
  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
};

export default Notes;
