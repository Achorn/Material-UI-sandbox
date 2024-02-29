import {
  Button,
  Container,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const field = { mt: "20px", mb: "20px", display: "block" };
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setDetailsError(false);
    setTitleError(false);

    e.preventDefault();
    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      setIsLoading(true);
      setSubmitError();
      try {
        const response = await fetch("http://localhost:8000/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, details, category }),
        });
        if (!response.ok) {
          const data = await response.json();
          setSubmitError(data.message);
        } else {
          setCategory("");
          setTitle("");
          navigate("/");
        }
      } catch (err) {
        setSubmitError(err);
      }
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          variant="outlined"
          label="Note Title"
          fullWidth
          required
          sx={field}
          error={titleError}
        />
        <TextField
          sx={field}
          fullWidth
          value={details}
          label="details"
          multiline
          required
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />

        <FormControl sx={field}>
          <FormLabel>Note Category</FormLabel>

          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          // color="error"
          endIcon={<SendIcon />}
          disabled={isLoading}
        >
          SUBMIT
        </Button>
      </form>
      {submitError && (
        <Typography variant="h5" sx={field} fontWeight={600} color="error">
          {submitError}
        </Typography>
      )}
    </Container>
  );
};

export default Create;
