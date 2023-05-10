import { Receipt } from "../Receipt/receipt.types";

interface HomepageProps {
  receipts: Receipt[];
}

const Homepage: React.FC<HomepageProps> = ({ receipts }) => (
  <>
    {receipts.map((receipt, index) => (
      <div key={index}>{receipt.title}</div>
    ))}
  </>
);

export default Homepage;
