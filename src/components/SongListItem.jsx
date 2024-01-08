import PropTypes from "prop-types";

const SongListItem = ({ list }) => {
  return (
    <>
      <p className="font-bold">{list.title}</p>
      <p>{list.createdAt}</p>
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
