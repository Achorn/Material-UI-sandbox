import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
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

  const breakpoints = {
    default: 3,
    1100: 2,
    800: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
