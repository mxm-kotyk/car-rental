import styled from "@emotion/styled";
import { StyledSection } from "../Section/Section.styled";
import home_background from "../../assets/home-background-1x.jpg";
import { Link } from "react-router-dom";

export const HomePageSection = styled(StyledSection)`
  min-height: calc(100dvh - 75px);
  padding-top: 260px;
  background-image: url(${home_background});
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const ContentWrapper = styled.div`
  width: 580px;
`;

export const Slogan = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
  font-weight: 600;
  line-height: 130%;
`;

export const SloganSubtext = styled.p`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;

  span {
    font-weight: 800;
  }
`;

export const HomePageLinkBtn = styled(Link)`
  display: flex;
  width: 278px;
  height: 44px;
  padding: 12px 92px;
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
