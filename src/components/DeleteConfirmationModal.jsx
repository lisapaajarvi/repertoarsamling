import PropTypes from "prop-types";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DeleteModal = ({ openModal, setOpenModal, cancelList }) => {
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Är du säker på att du vill ta bort listan? Den kommer inte att
              sparas.
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={cancelList}>
                Ja, ta bort listan
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Nej
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

DeleteModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  cancelList: PropTypes.func,
};

export default DeleteModal;
