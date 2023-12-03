import styled from "@emotion/styled";

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(18, 20, 23, 0.5);
`;

export const StyledLoader = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #fff;
  position: relative;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    left: 34px;
    bottom: 8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-bottom-color: #3470ff;
    box-sizing: border-box;
    animation: rotation 0.6s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
