import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import AddReceipt from "./pages/AddReceipt/AddReceipt";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/receipt/create" element={<AddReceipt />} />
      </Routes>
    </Layout>
  );
}

export default App;
