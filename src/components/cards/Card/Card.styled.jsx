import styled from "@emotion/styled";

export const StyledCard = styled.li`
  width: 274px;
`;

export const CardImgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardFavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardTitleText = styled.span`
  max-width: 200px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  span {
    color: #3470ff;
  }
`;

export const CardTagList = styled.ul`
  max-height: 40px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;
  margin-bottom: 28px;
  overflow: hidden;
  & :not(:last-child)::after {
    content: "";
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const CardTag = styled.span`
  display: block;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const CardLearnMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background: #0b44cd;
  }
`;
