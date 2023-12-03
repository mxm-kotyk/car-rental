import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import sprite from "../../assets/sprite.svg";
import {
  ModalBackdrop,
  ModalCloseBtn,
  ModalCloseIcon,
  ModalWrapper,
} from "./BasicModal.styled";

const BasicModal = ({ children, toggleModal }) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    document.addEventListener("keydown", closeOnEsc);
    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  const modal = (
    <ModalBackdrop onClick={handleClickOnBackdrop}>
      <ModalWrapper>
        <ModalCloseBtn type="button" onClick={toggleModal}>
          <ModalCloseIcon>
            <use href={`${sprite}#icon-x`}></use>
          </ModalCloseIcon>
        </ModalCloseBtn>
        {children}
      </ModalWrapper>
    </ModalBackdrop>
  );

  return createPortal(modal, document.querySelector("#root_modal"));
};

BasicModal.propTypes = {
  children: PropTypes.node,
  toggleModal: PropTypes.func,
};

export default BasicModal;
