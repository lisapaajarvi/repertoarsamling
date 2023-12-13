import PropTypes from 'prop-types';
const SongItem = ({song}) => {
    return(
        <>
            <h3 className="w-1/5">{song.title}</h3>
            <p className="w-1/5">{song.composer}</p>
            <p className="w-1/5">{song.origin}</p>
            <div className="w-1/5 flex">
                <p className="flex-1">{song.start}</p>
                <p className="flex-1">{song.length}</p>
            </div>
            
            <p className="w-1/5">{song.comments}</p>
        </>
    )
}

SongItem.propTypes = {
    song: PropTypes.shape({
      title: PropTypes.string.isRequired,
      composer: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
    }).isRequired,
  };

export default SongItem