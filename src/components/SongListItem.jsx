import PropTypes from "prop-types";

const SongListItem = ({ list }) => {
  return (
    <>
      <h3 className="w-1/6">{list.title}</h3>
      <p className="w-1/6">{list.createdAt}</p>
    </>
  );
};

SongListItem.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default SongListItem;
