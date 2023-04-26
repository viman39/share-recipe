import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

interface Ingredient {
  id: number;
  text: string;
}

const AddReceipt = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [receiptName, setReceiptName] = useState("");
  const [description, setDescription] = useState("");

  const addIngredient = () => {
    if (ingredient != "") {
      setIngredients((prev) => [
        ...prev,
        { id: prev.length, text: ingredient },
      ]);

      setIngredient("");
    }
  };

  const createReceipt = () => {
    console.log({ receiptName, ingredients, description });
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Receipt Name"
        variant="outlined"
        onChange={(e) => {
          setReceiptName(e.target.value);
        }}
      />
      <div>
        <span>Ingredients</span>
        <ul>
          {ingredients.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
        <TextField
          id="ingredient"
          label="Ingredient"
          variant="standard"
          value={ingredient}
          onChange={(e) => {
            setIngredient(e.target.value);
          }}
        />
        <button onClick={addIngredient}>Add</button>
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={6}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={createReceipt}>Create</button>
    </>
  );
};

export default AddReceipt;
