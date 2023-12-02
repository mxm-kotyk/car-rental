import styled from "@emotion/styled";

export const StyledLoadMoreBtn = styled.button`
  display: block;
  margin-inline: auto;
  margin-top: 100px;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;
  transition: color 200ms ease;

  &:hover,
  &:focus-visible {
    color: #0b44cd;
  }
`;
