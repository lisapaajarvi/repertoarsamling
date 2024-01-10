import { useContext, useState } from "react";
import { ListContext } from "../contexts/listContext";
import SongListItem from "./SongListItem";
import ListForm from "./ListForm";
import SongListModal from "./SongListModal";
import { Button } from "flowbite-react";
import { HiOutlinePlus } from "react-icons/hi";

const Lists = () => {
  const { lists } = useContext(ListContext);
  const [editing, setEditing] = useState(false);
  const [viewing, setViewing] = useState(false);
  const [currentList, setCurrentList] = useState(null);

  const handleClick = (list) => {
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
            <div className="flex justify-between align-center">
              <h2 className="text-xl">Repertoarlistor</h2>
              <Button
                gradientDuoTone="purpleToPink"
                className="shadow-md hover:shadow-xl float-right"
                onClick={() => setEditing(true)}
              >
                <div className="flex flex-col items-center justify-center">
                  <HiOutlinePlus className="h-10 w-10" />
                  Skapa ny lista
                </div>
              </Button>
            </div>
            {lists.map((list, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleClick(list)}
                  className="bg-white even:bg-gray-200 flex justify-between my-2 p-2"
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
