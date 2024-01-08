import PropTypes from "prop-types";
import { Modal, List, ListItem } from "flowbite-react";

const SongListModal = ({ currentList, openModal, closeModal }) => {
  const listLength = () => {
    let totalMinutes = 0;
    let totalSeconds = 0;
    currentList.songs.forEach((song) => {
      const min = song.length.split(":")[0];
      totalMinutes += parseInt(min);
      const sec = song.length.split(":")[1];
      totalSeconds += parseInt(sec);
    });

    totalMinutes += Math.floor(totalSeconds / 60);
    const extraSeconds = totalSeconds % 60;
    if (extraSeconds != 0) {
      return totalMinutes + ":" + totalSeconds;
    } else {
      return totalMinutes + ":00";
    }
  };

  return (
    <>
      {currentList && (
        <Modal show={openModal} size="3xl" onClose={closeModal} popup>
          <Modal.Header>{currentList.title}</Modal.Header>
          <Modal.Body>
            <List ordered className="my-4">
              {currentList.songs.map((song) => {
                return (
                  <ListItem key={song.id}>
                    <span className="font-bold">{song.title}</span>{" "}
                    <span>
                      start: {song.start} ({song.length})
                    </span>
                  </ListItem>
                );
              })}
            </List>
            <p>Skapad {currentList.createdAt}</p>
            <p>Total längd {listLength()}</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

SongListModal.propTypes = {
  currentList: PropTypes.object,
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default SongListModal;
