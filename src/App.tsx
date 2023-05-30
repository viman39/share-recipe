import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import AddReceipt from "./pages/AddReceipt/AddReceipt";
import useAuth from "./utils/hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {user !== null && (
          <Route path="/receipt/create" element={<AddReceipt />} />
        )}
      </Routes>
    </Layout>
  );
}

export default App;
