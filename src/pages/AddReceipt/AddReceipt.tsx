import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAddDocument } from "../../utils/hooks/useFirestore";
import useAuth from "../../utils/hooks/useAuth";
import {
  Button,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import NumberIcon from "../../components/Icons/NumberIcon";

const AddReceipt: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [step, setStep] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addDocument, setLoading, loading } = useAddDocument("receipts");
  const { user } = useAuth();

  const addIngredient = () => {
    if (ingredient !== "") {
      setIngredients((prev) => [...prev, ingredient]);
      setIngredient("");
    }
  };

  const removeIngredient = (key: number) => {
    setIngredients((oldIngredients) =>
      oldIngredients.filter((value, index) => index !== key)
    );
  };

  const addStep = () => {
    if (step !== "") {
      setSteps((prev) => [...prev, step]);
      setStep("");
    }
  };

  const removeStep = (key: number) => {
    setSteps((oldSteps) => oldSteps.filter((value, index) => index !== key));
  };

  const createReceipt = async () => {
    setLoading(true);
    addDocument({ title, description, ingredients, steps, userId: user?.uid });
  };

  return (
    <Grid container direction="row" padding="2em" alignContent="center">
      <Grid item xs={12} order={{ xs: 1 }} marginBottom="1em">
        <FormControl>
          <TextField
            label="Receipt Name"
            variant="standard"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        order={{ xs: 3, sm: 2 }}
        marginBottom="1em"
        paddingRight="1em"
      >
        <Grid item marginBottom="1em">
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            fullWidth
            rows={4}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Grid>
        <Grid item marginBottom="1em">
          <List>
            {steps.map((value, index) => (
              <ListItem key={index}>
                <NumberIcon value={index + 1} />
                <ListItemText
                  primary={value}
                  sx={{ textAlign: "justify !important" }}
                />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeStep(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Step"
            value={step}
            multiline
            fullWidth
            rows={2}
            onChange={(e) => {
              setStep(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={addStep}
                  style={{ cursor: "pointer" }}
                >
                  <AddIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} order={{ xs: 2, sm: 3 }} marginBottom="1em">
        <Grid item>
          <List>
            {ingredients.map((value, index) => (
              <ListItem key={index}>
                <ListItemText primary={value} />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeIngredient(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item paddingRight="1em">
          <Input
            id="ingredient"
            placeholder="Ingredient"
            value={ingredient}
            fullWidth
            endAdornment={
              <InputAdornment
                position="end"
                onClick={addIngredient}
                style={{ cursor: "pointer" }}
              >
                <AddIcon />
              </InputAdornment>
            }
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addIngredient();
              }
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} order={{ xs: 4 }}>
        {!loading && (
          <Button
            color="inherit"
            variant="outlined"
            onClick={createReceipt}
            endIcon={<PostAddIcon />}
          >
            Create Receipt
          </Button>
        )}
        {loading && (
          <Button
            color="inherit"
            onClick={createReceipt}
            disabled={true}
            endIcon={<PostAddIcon />}
          >
            Create Receipt
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default AddReceipt;
