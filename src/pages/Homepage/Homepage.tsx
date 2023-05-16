import useGetDocs from "../../utils/hooks/useGetDocs";
import { Receipt } from "../Receipt/receipt.types";

const Homepage: React.FC = () => {
  const receipts: any = [];

  const receipt = useGetDocs("receipts");

  return (
    <>
      {receipt.title}
      {receipts.map((receipt: Receipt, index: number) => (
        <div key={index}>{receipt.title}</div>
      ))}
    </>
  );
};

export default Homepage;
