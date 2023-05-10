import { TextField } from "@mui/material";
import { useState } from "react";
import { Receipt } from "../Receipt/receipt.types";

interface AddReceiptProps {
  addReceipt: (receipt: Receipt) => void;
}

const AddReceipt: React.FC<AddReceiptProps> = ({ addReceipt }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addIngredient = () => {
    if (ingredient != "") {
      setIngredients((prev) => [...prev, ingredient]);
      setIngredient("");
    }
  };

  const createReceipt = () => {
    addReceipt({ ingredients, title, description });
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Receipt Name"
        variant="outlined"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div>
        <span>Ingredients</span>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
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
