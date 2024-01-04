import PropTypes from "prop-types";
import { Badge } from "flowbite-react";
import { HiOutlinePlus, HiCheck } from "react-icons/hi";

const SongToList = ({ song, bgColor, addOrRemoveSong, isInList }) => {
  return (
    <div className="bg-white even:bg-gray-200 opacity-80 flex my-2 p-2 rounded-md shadow-md hover:shadow-xl hover:opacity-100 items-center">
      <Badge
        size="md"
        className="hover:cursor-pointer mx-4"
        icon={isInList ? HiCheck : HiOutlinePlus}
        onClick={() => addOrRemoveSong(song)}
      />
      <h3 className="w-1/6">{song.title}</h3>
      <p className="w-1/6">{song.composer}</p>
      <p className="w-1/6">{song.length}</p>
      <p className="w-1/6">{song.comments}</p>
      <div className="w-1/6 flex justify-center items-center">
        <div
          className="rounded-full h-8 w-8 flex justify-center items-center text-white"
          style={{ backgroundColor: `${bgColor}` }}
        >
          {song.category.substring(0, 1)}
        </div>
      </div>
    </div>
  );
};

SongToList.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    composer: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  bgColor: PropTypes.string.isRequired,
  addOrRemoveSong: PropTypes.func,
  isInList: PropTypes.bool,
};

export default SongToList;
