import { useState, useEffect } from "react";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const useFetchCollection = (collectionName: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { data, loading };
};

// Hook for fetching a single document by ID
export const useFetchDocument = (
  collectionName: string,
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

// Hook for adding a new document
export const useAddDocument = (collectionName: string) => {
  const addDocument = async (data: any) => {
    try {
      await addDoc(collection(db, collectionName), data);
    } catch (error) {
      console.log("Add document error:", error);
    }
  };

  return { addDocument };
};

// Hook for updating a document
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

// Hook for deleting a document
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
