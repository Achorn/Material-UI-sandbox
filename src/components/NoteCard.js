import { Card, IconButton, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { DeleteOutlined } from "@mui/icons-material";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          title={note.title}
          subheader={note.category}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
