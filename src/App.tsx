import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import AddReceipt from "./pages/AddReceipt/AddReceipt";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/receipt/create" element={<AddReceipt />} />
      </Routes>
    </>
  );
}

export default App;
