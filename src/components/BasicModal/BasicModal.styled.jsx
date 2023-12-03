import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  background: #fff;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
`;

export const ModalCloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;
`;
