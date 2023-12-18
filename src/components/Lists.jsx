import { useContext } from "react";
import { SongContext } from "../contexts/songContext";
import SongListItem from "./SongListItem";
const Lists = () => {
  const { lists } = useContext(SongContext);
  console.log(lists);

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-emerald-100">
      <h2>Repertoarlistor</h2>
      {lists.map((list, index) => {
        return (
          <div key={index} className="bg-white even:bg-gray-200 flex my-2 p-2">
            <SongListItem list={list} />
          </div>
        );
      })}
    </main>
  );
};

export default Lists;
