import { Button, Label, Modal, TextInput, Select } from "flowbite-react";
import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { SongContext } from "../contexts/songContext";
import { categories } from "../lib/categories";

const blankSong = {
  title: "",
  composer: "",
  start: "",
  length: "",
  origin: "",
  comments: "",
  category: "",
};

const AddSongModal = (props) => {
  const [songDetails, setSongDetails] = useState({ ...blankSong });
  const { addSong, editSong } = useContext(SongContext);

  useEffect(() => {
    if (props.song) {
      setSongDetails(props.song);
    }
  }, [props.song]);

  const clearState = () => {
    setSongDetails({ ...blankSong });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setSongDetails({
      ...songDetails,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (props.song) {
      editSong(songDetails);
    } else {
      addSong(songDetails);
    }
    clearState();
    props.onCloseModal();
  };

  const closeModal = () => {
    clearState();
    props.onCloseModal();
  };

  return (
    <>
      <Modal show={props.openModal} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {props.song ? "Redigera sång" : "Lägg till en ny sång"}
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Sångtitel" />
              </div>
              <TextInput
                id="title"
                placeholder="Monicas vals"
                value={songDetails.title}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="composer" value="Kompositör" />
              </div>
              <TextInput
                id="composer"
                placeholder="Bill Evans / Monica Zetterlund"
                value={songDetails.composer}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="start" value="Starttoner" />
              </div>
              <TextInput
                id="start"
                placeholder="A, C#, E"
                value={songDetails.start}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="length" value="Längd" />
              </div>
              <TextInput
                id="length"
                placeholder="3:20"
                value={songDetails.length}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="origin" value="Noter" />
              </div>
              <TextInput
                id="origin"
                placeholder="Lösblad på drive"
                value={songDetails.origin}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="comments" value="Kommentarer" />
              </div>
              <TextInput
                id="comments"
                placeholder="Påbörjad våren 2018... Nu nästan i mål!"
                value={songDetails.comments}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Välj kategori" />
              </div>
              <Select
                id="category"
                value={songDetails.category}
                onChange={(e) => handleInputChange(e)}
                required
              >
                {categories.map((cat, index) => {
                  return <option key={index}>{cat.name}</option>;
                })}
              </Select>
            </div>

            <div className="w-full">
              <Button onClick={handleSubmit}>
                {props.song ? "Spara ändringar" : "Lägg till i repertoarlistan"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

AddSongModal.propTypes = {
  openModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
  song: PropTypes.object,
};

export default AddSongModal;
