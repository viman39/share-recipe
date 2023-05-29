import { Modal, Box } from "@mui/material";
import { modalClass } from "./modal.styles";
import { ReactNode } from "react";

interface ModalWrapperProps {
  modalIsOpen: boolean;
  onCloseHandler: () => void;
  children: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  modalIsOpen,
  onCloseHandler,
  children,
}) => {
  return (
    <Modal
      open={modalIsOpen}
      onClose={onCloseHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalClass}>{children}</Box>
    </Modal>
  );
};

export { ModalWrapper as Modal };
