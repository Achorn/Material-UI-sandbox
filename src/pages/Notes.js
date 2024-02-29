import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
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

  const handleDelete = async (id) => {
    console.log("deleting ", id);
    const response = await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    } else {
      console.log("error");
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={3}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
