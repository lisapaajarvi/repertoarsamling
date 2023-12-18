import { useContext, useState, useEffect } from "react";
import SongItem from "./SongItem";
import AddSongModal from "./AddSongModal";
import { Button } from "flowbite-react";
import { SongContext } from "../contexts/songContext";

const Main = () => {
  const { songs } = useContext(SongContext);
  const [openModal, setOpenModal] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const songCount = songs.length;
  const handleClick = (song) => {
    setEditingContent(song);
  };

  useEffect(() => {
    if (editingContent != null) {
      setOpenModal(true);
    }
  }, [editingContent]);

  const onCloseModal = () => {
    setOpenModal(false);
    setEditingContent(null);
  };

  const categories = [
    { name: "Jul", bgColor: "bg-red-400" },
    { name: "Sakralt", bgColor: "bg-green-400" },
    { name: "Film/tv/spel", bgColor: "bg-blue-400" },
    { name: "Folkligt", bgColor: "bg-yellow-400" },
    { name: "Klassiskt", bgColor: "bg-pink-400" },
  ];

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
              >
                {cat.name}
              </div>
            );
          })}
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
          {songs.map((song, index) => {
            return (
              <div
                key={index}
                className="bg-white even:bg-gray-200 flex my-2 p-2"
                onClick={() => handleClick(song)}
              >
                <SongItem song={song} />
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
