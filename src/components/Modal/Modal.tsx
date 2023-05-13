import { AppBar, Typography, Button, Modal, Box } from "@mui/material";
import { modalClass } from "./modal.styles";

interface ModalWrapperProps {
  modalIsOpen: boolean;
  onConfirmHandler: () => void;
  onCloseHandler: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  modalIsOpen,
  onConfirmHandler,
  onCloseHandler,
}) => {
  return (
    <Modal
      open={modalIsOpen}
      onClose={onCloseHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalClass}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button color="inherit" onClick={onConfirmHandler}>
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export { ModalWrapper as Modal };
