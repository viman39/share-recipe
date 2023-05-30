import useAuth from "../../utils/hooks/useAuth";
import { useFetchCollection } from "../../utils/hooks/useFirestore";
import { Receipt } from "../Receipt/receipt.types";

const Homepage: React.FC = () => {
  const { user } = useAuth();
  const { data: receipts, loading: dataLoading } = useFetchCollection(
    "receipts",
    user ? { field: "userId", operator: "==", value: user.uid } : {}
  );

  console.log(user == null ? "" : user.uid, receipts);

  return (
    <>
      {dataLoading ? (
        <div>loading...</div>
      ) : (
        receipts.map((receipt: Receipt, index: number) => (
          <div key={index}>{receipt?.title}</div>
        ))
      )}
    </>
  );
};

export default Homepage;
