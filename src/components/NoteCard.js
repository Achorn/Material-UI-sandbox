import { Avatar, Card, IconButton, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";

const NoteCard = ({ note, handleDelete }) => {
  const avatarStyle = {
    bgcolor:
      note.category === "work"
        ? yellow[700]
        : note.category === "money"
        ? green[500]
        : note.category === "todos"
        ? pink[500]
        : blue[500],
  };

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={avatarStyle}>{note.category[0].toUpperCase()}</Avatar>
          }
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
