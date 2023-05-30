import { TextField } from "@mui/material";
import { useState } from "react";
import { useAddDocument } from "../../utils/hooks/useFirestore";
import useAuth from "../../utils/hooks/useAuth";

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
      {!loading && <button onClick={createReceipt}>Creaza</button>}
      {loading && <button>Loading</button>}
    </>
  );
};

export default AddReceipt;
