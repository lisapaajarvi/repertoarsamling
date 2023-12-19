/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { db } from "../../firebase.config";
import {
  collection,
  getDocs,
  // getDoc,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export const ListContext = createContext({
  lists: [],
  addList: () => {
    console.warn("NO PROVIDER FOUND");
  },
  editList: () => {
    console.warn("NO PROVIDER FOUND");
  },
});

function ListProvider({ children }) {
  const [lists, setLists] = useState([]);
  const listCollection = collection(db, "lists");

  const getLists = async () => {
    await getDocs(listCollection).then((data) => {
      setLists(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addList = (newList) => {
    addDoc(listCollection, {
      ...newList,
    }).then(() => {
      setLists((prevState) => [...prevState, newList]);
    });
  };

  const editList = (listToEdit) => {
    const dbDocument = doc(db, "songs", listToEdit.id);
    updateDoc(dbDocument, listToEdit).then(() => {
      getLists();
    });
  };

  return (
    <ListContext.Provider value={{ lists, addList, editList }}>
      {children}
    </ListContext.Provider>
  );
}

export default ListProvider;
