/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { db } from "../../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export const SongContext = createContext({
  songs: [],
  addSong: () => {
    console.warn("NO PROVIDER FOUND");
  },
  editSong: () => {
    console.warn("NO PROVIDER FOUND");
  },
});

function SongProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const dbCollection = collection(db, "songs");

  const getSongs = async () => {
    getDocs(dbCollection).then((data) => {
      setSongs(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addSong = (newSong) => {
    addDoc(dbCollection, {
      ...newSong,
    }).then(() => {
      setSongs((prevState) => [...prevState, newSong]);
    });
  };

  const editSong = (songToEdit) => {
    const dbDocument = doc(db, "songs", songToEdit.id);
    updateDoc(dbDocument, songToEdit).then(() => {
      getSongs();
    });
  };

  return (
    <SongContext.Provider value={{ songs, addSong, editSong }}>
      {children}
    </SongContext.Provider>
  );
}

export default SongProvider;
