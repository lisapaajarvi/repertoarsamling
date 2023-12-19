import PropTypes from "prop-types";

const SongToList = ({ song, bgColor, addSongToList }) => {
  return (
    <div
      className="bg-white even:bg-gray-200 opacity-80 flex my-2 p-2 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer hover:opacity-100"
      onClick={() => addSongToList(song)}
    >
      <h3 className="w-1/6">{song.title}</h3>
      <p className="w-1/6">{song.composer}</p>
      <p className="w-1/6">{song.length}</p>
      <p className="w-1/6">{song.comments}</p>
      <div className="w-1/6 flex justify-center items-center">
        <div
          className="rounded-full h-8 w-8"
          style={{ backgroundColor: `${bgColor}` }}
        ></div>
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
  addSongToList: PropTypes.func,
  removeSongFromList: PropTypes.func,
  isInList: PropTypes.bool,
};

export default SongToList;
