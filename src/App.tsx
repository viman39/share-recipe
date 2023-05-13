import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import AddReceipt from "./pages/AddReceipt/AddReceipt";
import { useState } from "react";
import { Receipt } from "./pages/Receipt/receipt.types";

function App() {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
