import { useContext, useState, useEffect } from "react";
import SongItem from "./SongItem";
import AddSongModal from "./AddSongModal";
import { Button, TextInput } from "flowbite-react";
import { SongContext } from "../contexts/songContext";
import Fuse from "fuse.js";

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  minMatchCharLength: 2,
  keys: ["title", "composer", "comments"],
};

const Main = () => {
  const { songs } = useContext(SongContext);
  const [openModal, setOpenModal] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("Alla");
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [fuseSearch, setFuseSearch] = useState("");
  const songCount = filteredSongs.length;

  const handleClick = (song) => {
    setEditingContent(song);
  };

  useEffect(() => {
    if (editingContent != null) {
      setOpenModal(true);
    }
  }, [editingContent]);

  useEffect(() => {
    const applyFilter = () => {
      if (categoryFilter === "Alla") {
        return songs;
      }
      return songs.filter((song) => song.category === categoryFilter);
    };
    setFilteredSongs(applyFilter());
  }, [categoryFilter, songs]);

  const onCloseModal = () => {
    setOpenModal(false);
    setEditingContent(null);
  };

  const categories = [
    { name: "Jul", bgColor: "red" },
    { name: "Sakralt", bgColor: "green" },
    { name: "Film/tv/spel", bgColor: "blue" },
    { name: "Folkligt", bgColor: "yellow" },
    { name: "Klassiskt", bgColor: "purple" },
  ];

  console.log(categoryFilter);
  console.log(filteredSongs);

  const handleSearch = () => {
    const fuse = new Fuse(songs, fuseOptions);
    if (fuseSearch.length > 2) {
      const result = fuse.search(fuseSearch);
      const resultArray = [];
      result.forEach((item) => {
        resultArray.push(item.item);
      });
      setFilteredSongs(resultArray);
      setFuseSearch("");
    }
  };

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-emerald-100">
      <div className="container mx-auto p-4">
        <Button onClick={() => setOpenModal(true)}>Lägg till sång</Button>
        <h2 className="text-lg flex justify-center">
          Sånger i repertoaren ({songCount} st):
        </h2>
        <div className="flex gap-4 justify-around">
          {categories.map((cat, index) => {
            return (
              <div
                key={index}
                className="rounded-md w-40 p-8 bg-red-400 flex align-center justify-center"
                style={{ backgroundColor: `${cat.bgColor}` }}
                onClick={() => setCategoryFilter(cat.name)}
              >
                <p className="text-3xl">{cat.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <TextInput
            id="search"
            placeholder="Skriv din sökning här"
            value={fuseSearch}
            onChange={(e) => setFuseSearch(e.target.value)}
          />
          <div className="w-full">
            <Button onClick={handleSearch}>Sök</Button>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <p className="col-span-2">Titel</p>
          <p className="col-span-2">Kompositör</p>
          <p className="col-span-2">Noter</p>
          <p>Starttoner</p>
          <p>Längd</p>
          <p className="col-span-2">Kommentarer</p>
          <p className="col-span-2">Kategori</p>
        </div>
        <section>
          {filteredSongs.map((song, index) => {
            const bgColor = () => {
              const cat = categories.find(({ name }) => name === song.category);
              return cat.bgColor;
            };
            return (
              <div
                key={index}
                className="bg-white even:bg-gray-200 flex my-2 p-2"
                onClick={() => handleClick(song)}
              >
                <SongItem song={song} bgColor={bgColor()} />
              </div>
            );
          })}
        </section>
      </div>
      <AddSongModal
        openModal={openModal}
        onCloseModal={onCloseModal}
        song={editingContent}
      />
    </main>
  );
};

export default Main;
