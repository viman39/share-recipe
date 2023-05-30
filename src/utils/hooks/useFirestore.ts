import { useState, useEffect } from "react";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { QueryOptions, Collection } from "../firebase.types";

export const useFetchCollection = (
  collectionName: Collection,
  queryOptions: Partial<QueryOptions> = {}
) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { field, operator, value } = queryOptions;

  useEffect(() => {
    const collectionRef =
      field && operator && value
        ? query(collection(db, collectionName), where(field, operator, value))
        : collection(db, collectionName);

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName, field, operator, value]);

  return { data, loading };
};

export const useFetchDocument = (
  collectionName: Collection,
  documentId: string
) => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, collectionName, documentId),
      (snapshot: any) => {
        if (snapshot.exists()) {
          setDocument({ id: snapshot.id, ...snapshot.data() });
        } else {
          setDocument(null);
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, documentId]);

  return { document, loading };
};

export const useAddDocument = (collectionName: string) => {
  const [loading, setLoading] = useState(false);

  const addDocument = async (data: any) => {
    try {
      await addDoc(collection(db, collectionName), data);
      setLoading(false);
    } catch (error) {
      console.log("Add document error:", error);
    }
  };

  return { addDocument, setLoading, loading };
};

export const useUpdateDocument = (
  collectionName: string,
  documentId: string
) => {
  const updateDocument = async (data: any) => {
    try {
      await updateDoc(doc(db, collectionName, documentId), data);
    } catch (error) {
      console.log("Update document error:", error);
    }
  };

  return { updateDocument };
};

export const useDeleteDocument = (
  collectionName: string,
  documentId: string
) => {
  const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, collectionName, documentId));
    } catch (error) {
      console.log("Delete document error:", error);
    }
  };

  return { deleteDocument };
};
