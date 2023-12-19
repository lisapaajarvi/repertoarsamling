import PropTypes from "prop-types";

const SongListItem = ({ list }) => {
  const date = new Date(list.createdAt.seconds * 1000).toLocaleString();
  return (
    <>
      <h3 className="w-1/6">{list.title}</h3>
      <p className="w-1/6">{date}</p>
    </>
  );
};

SongListItem.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.object,
  }),
};

export default SongListItem;
