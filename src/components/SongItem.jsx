import PropTypes from "prop-types";
const SongItem = ({ song, bgColor, handleClick }) => {
  return (
    <div
      className="bg-white even:bg-gray-200 opacity-80 flex my-2 p-2 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer hover:opacity-100"
      onClick={() => handleClick(song)}
    >
      <h3 className="w-1/6">{song.title}</h3>
      <p className="w-1/6">{song.composer}</p>
      <p className="w-1/6">{song.origin}</p>
      <div className="w-1/6 flex">
        <p className="flex-1">{song.start}</p>
        <p className="flex-1">{song.length}</p>
      </div>

      <p className="w-1/6">{song.comments}</p>
      <div className="w-1/12 flex justify-around items-center">
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

SongItem.propTypes = {
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
  handleClick: PropTypes.func,
};

export default SongItem;
