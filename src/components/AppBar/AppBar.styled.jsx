import styled from "@emotion/styled";
import { StyledContainer } from "../Container/Container.styled";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding-block: 16px;
`;

export const HeaderContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const NavLinkIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const NavLinkFavoritesIcon = styled(NavLinkIcon)`
  fill: transparent;
  stroke: #121417;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -8px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #121417;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after,
  &:focus-visible:after,
  &.active:after {
    width: 100%;
    left: 0;
  }
`;
