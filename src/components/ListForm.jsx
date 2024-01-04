import { useContext, useState } from "react";
import { ListContext } from "../contexts/listContext";
import { SongContext } from "../contexts/songContext";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Button, TextInput } from "flowbite-react";
import fuseSearch from "../lib/fuseSearch";
import SongToList from "./SongToList";
import { categories } from "../lib/categories";
import PropTypes from "prop-types";

const ListForm = ({ setEditing }) => {
  const { addList } = useContext(ListContext);
  const { songs } = useContext(SongContext);
  const [listTitle, setListTitle] = useState("");
  const [listSongs, setListSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSearch = () => {
    if (searchQuery.length > 2) {
      const result = fuseSearch(songs, searchQuery);
      setFilteredSongs(result);
      setSearchQuery("");
    }
  };

  const addOrRemoveSong = (song) => {
    if (isInList(song)) {
      removeSongFromList(song);
    } else {
      addSongToList(song);
    }
  };

  const addSongToList = (song) => {
    setListSongs((prevState) => [...prevState, song]);
  };

  const removeSongFromList = (song) => {
    const list = listSongs.filter((item) => item.id !== song.id);
    setListSongs(list);
  };

  const isInList = (song) => {
    const inList = listSongs.find((item) => item.id === song.id);
    if (inList !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const emptyListState = () => {
    setListTitle("");
    setListSongs([]);
    setOpenDeleteModal(false);
    setEditing(false);
  };

  const handleSubmit = () => {
    const today = new Date();
    const createdAt = today.toLocaleDateString();
    const newList = {
      title: listTitle,
      songs: listSongs,
      createdAt: createdAt,
    };
    addList(newList);
    emptyListState();
  };

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-emerald-100">
      <div>
        <p>Lägg till en ny lista</p>
        <div>
          <TextInput
            id="title"
            placeholder="Lucia 2023"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            required
          />
        </div>

        {listSongs.map((song, index) => {
          return (
            <p key={index} onClick={() => removeSongFromList(song)}>
              {song.title}
            </p>
          );
        })}
        <div className="flex py-4 gap-4 w-full">
          <TextInput
            id="search"
            placeholder="Sök efter sånger"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sizing="md"
          />
          <Button onClick={handleSearch}>Sök</Button>
        </div>
        <Button onClick={handleSubmit}>{"Spara lista"}</Button>
        <Button onClick={() => setOpenDeleteModal(true)}>Avbryt</Button>
        <section>
          {filteredSongs.map((song, index) => {
            const bgColor = () => {
              const cat = categories.find(({ name }) => name === song.category);
              return cat.bgColor;
            };

            return (
              <SongToList
                song={song}
                bgColor={bgColor()}
                key={index}
                addOrRemoveSong={addOrRemoveSong}
                isInList={isInList(song)}
              />
            );
          })}
        </section>
      </div>
      <DeleteConfirmationModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        cancelList={emptyListState}
      />
    </main>
  );
};

ListForm.propTypes = {
  setEditing: PropTypes.func.isRequired,
};

export default ListForm;
