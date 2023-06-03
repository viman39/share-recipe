import { FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useAddDocument } from "../../utils/hooks/useFirestore";
import useAuth from "../../utils/hooks/useAuth";
import { Button, Input, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddReceipt: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addDocument, setLoading, loading } = useAddDocument("receipts");
  const { user } = useAuth();

  const addIngredient = () => {
    if (ingredient != "") {
      setIngredients((prev) => [...prev, ingredient]);
      setIngredient("");
    }
  };

  const createReceipt = async () => {
    setLoading(true);
    addDocument({ ingredients, title, description, userId: user?.uid });
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
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Steps"
            multiline
            fullWidth
            rows={4}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={addIngredient}
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
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
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
          <Button color="inherit" onClick={createReceipt}>
            Create Receipt
          </Button>
        )}
        {loading && (
          <Button color="inherit" onClick={createReceipt} disabled={true}>
            Create Receipt
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default AddReceipt;
