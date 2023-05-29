import { TextField } from "@mui/material";
import { useState } from "react";
import { useAddDocument } from "../../utils/hooks/useFirestore";

const AddReceipt: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addDocument } = useAddDocument("receipts");

  const addIngredient = () => {
    if (ingredient != "") {
      setIngredients((prev) => [...prev, ingredient]);
      setIngredient("");
    }
  };

  const createReceipt = async () => {
    addDocument({ ingredients, title, description });
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
        <span>Ingrediente</span>
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
        <button onClick={addIngredient}>adauga</button>
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
      <button onClick={createReceipt}>Creaza</button>
    </>
  );
};

export default AddReceipt;
