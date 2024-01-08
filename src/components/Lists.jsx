import { useContext, useState } from "react";
import { ListContext } from "../contexts/listContext";
import SongListItem from "./SongListItem";
import ListForm from "./ListForm";
import SongListModal from "./SongListModal";
import { Button } from "flowbite-react";

const Lists = () => {
  const { lists } = useContext(ListContext);
  const [editing, setEditing] = useState(false);
  const [viewing, setViewing] = useState(false);
  const [currentList, setCurrentList] = useState(null);

  const handleClick = (list) => {
    console.log("test i funktion", list);
    setCurrentList(list);
    setViewing(true);
  };

  const closeModal = () => {
    setCurrentList(null);
    setViewing(false);
  };

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-emerald-100">
      <div className="container mx-auto p-4">
        {editing ? (
          <ListForm setEditing={setEditing} />
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Skapa ny lista</Button>
            <h2>Repertoarlistor</h2>
            {lists.map((list, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleClick(list)}
                  className="bg-white even:bg-gray-200 flex my-2 p-2"
                >
                  <SongListItem list={list} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <SongListModal
        openModal={viewing}
        closeModal={closeModal}
        currentList={currentList}
      />
    </main>
  );
};

export default Lists;
