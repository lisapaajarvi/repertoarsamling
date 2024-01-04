import { useContext, useState, useEffect } from "react";
import SongItem from "./SongItem";
import AddSongModal from "./AddSongModal";
import { Button, TextInput } from "flowbite-react";
import { SongContext } from "../contexts/songContext";
import fuseSearch from "../lib/fuseSearch";
import { categories } from "../lib/categories";
import { HiSearch, HiOutlinePlus } from "react-icons/hi";

const Main = () => {
  const { songs } = useContext(SongContext);
  const [openModal, setOpenModal] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("Alla");
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchQuery, setSearchQuery] = useState("");
  const songCount = filteredSongs.length;
  const totalSongCount = songs.length;

  useEffect(() => {
    if (categories[0].name !== "Alla")
      categories.unshift({ name: "Alla", bgColor: "lightblue" });
  }, []);

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

  const handleClick = (song) => {
    setEditingContent(song);
  };

  const handleSearch = () => {
    setCategoryFilter("Alla");
    if (searchQuery.length > 2) {
      const result = fuseSearch(songs, searchQuery);
      setFilteredSongs(result);
      setSearchQuery("");
    }
  };

  const isMarked = (category) => {
    if (category.name === categoryFilter) return true;
    return false;
  };

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-emerald-100">
      <div className="container mx-auto p-4">
        <div className="flex gap-4 justify-between">
          <div className="flex flex-wrap gap-4 justify-around">
            {categories.map((cat, index) => {
              const marked = isMarked(cat);
              return (
                <div
                  key={index}
                  className={`rounded-md w-40 p-8 flex align-center justify-center opacity-90 shadow-md hover:shadow-xl hover:cursor-pointer hover:opacity-100 hover:border-solid hover:border-4 hover:border-black ${
                    marked &&
                    "shadow-xl opacity-100 border-solid border-4 border-black"
                  }`}
                  style={{ backgroundColor: `${cat.bgColor}` }}
                  onClick={() => setCategoryFilter(cat.name)}
                >
                  <p className="text-3xl text-grey-700">{cat.name}</p>
                </div>
              );
            })}
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            onClick={() => setOpenModal(true)}
            className="shadow-md hover:shadow-xl"
          >
            <div className="flex flex-col items-center justify-center">
              <HiOutlinePlus className="h-20 w-20" />
              Lägg till sång
            </div>
          </Button>
        </div>
        <div>
          <div className="flex w-full p-4 gap-4 justify-center items-center">
            <TextInput
              id="search"
              placeholder="Sök här!"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sizing="md"
            />
            <Button gradientDuoTone="purpleToPink" onClick={handleSearch}>
              <HiSearch className="h-6 w-6" />
            </Button>
            {categoryFilter === "Alla" && songCount !== totalSongCount ? (
              <p className="text-md">{songCount} st sånger i sökresultatet</p>
            ) : categoryFilter === "Alla" ? (
              <p className="text-md">
                totalt {totalSongCount} st sånger i repertoaren
              </p>
            ) : (
              <p className="text-md">
                {songCount} st sånger i kategorin {categoryFilter}
              </p>
            )}
          </div>
          <div className="grid grid-cols-12">
            <p className="col-span-2">Titel</p>
            <p className="col-span-2">Kompositör</p>
            <p className="col-span-2">Noter</p>
            <p>Starttoner</p>
            <p>Längd</p>
            <p className="col-span-2">Kommentarer</p>
            <p>Kategori</p>
          </div>
          <section>
            {filteredSongs.map((song, index) => {
              const bgColor = () => {
                const cat = categories.find(
                  ({ name }) => name === song.category
                );
                return cat.bgColor;
              };
              return (
                <SongItem
                  key={index}
                  song={song}
                  bgColor={bgColor()}
                  handleClick={handleClick}
                />
              );
            })}
          </section>
        </div>
        <AddSongModal
          openModal={openModal}
          onCloseModal={onCloseModal}
          song={editingContent}
        />
      </div>
    </main>
  );
};

export default Main;
