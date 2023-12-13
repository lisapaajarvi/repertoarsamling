import { createContext, useEffect, useState } from "react";

export const SongContext = createContext({
  songs: [],
  addSong: () => {
    console.warn("NO PROVIDER FOUND");
  },

});

function SongProvider({children}) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs([{"title":"Jul jul", "composer": "H M", "origin": "Lösa noter på drive", "start": "A, C, E", "length": "1:25", "comments": "En klassiker som folk gillar!"}, {"title":"Jul jul", "composer": "H M", "origin": "Lösa noter på drive", "start": "A, C, E", "length": "1:25", "comments": "En klassiker som folk gillar!"}])
  }, []);

  const addSong = (newSong) => {
    setSongs((prevState) => [...prevState, newSong]);
  };

  return (
    <SongContext.Provider value={{ songs, addSong }}>
      {children}
    </SongContext.Provider>
  );
}

export default SongProvider;