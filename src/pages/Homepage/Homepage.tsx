import { useFetchCollection } from "../../utils/hooks/useFirestore";
import { Receipt } from "../Receipt/receipt.types";

const Homepage: React.FC = () => {
  const { data: receipts } = useFetchCollection("receipts");

  return (
    <>
      {receipts.map((receipt: Receipt, index: number) => (
        <div key={index}>{receipt?.title}</div>
      ))}
    </>
  );
};

export default Homepage;
