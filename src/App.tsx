import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import AddReceipt from "./pages/AddReceipt/AddReceipt";
import { useState } from "react";
import { Receipt } from "./pages/Receipt/receipt.types";

function App() {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  console.log(receipts);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage receipts={receipts} />} />
        <Route
          path="/receipt/create"
          element={
            <AddReceipt
              addReceipt={(receipt: Receipt) =>
                setReceipts((prev) => [...prev, receipt])
              }
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
