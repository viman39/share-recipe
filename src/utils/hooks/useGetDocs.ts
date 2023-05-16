import { useState, useEffect } from "react";
import { getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../firebase";

const useGetDocs = (collectionPath: string) => {
  const [data, setData] = useState<DocumentData>([]);

  useEffect(() => {
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, collectionPath));

      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setData(doc.data());
        });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getDocuments();
  }, []);

  return data;
};

export default useGetDocs;
