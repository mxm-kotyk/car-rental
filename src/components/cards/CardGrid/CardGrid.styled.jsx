import styled from "@emotion/styled";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(274px, 100%), 1fr));
  grid-auto-rows: 1fr;
  row-gap: 50px;
  column-gap: 29px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 247px);
  }
`;
