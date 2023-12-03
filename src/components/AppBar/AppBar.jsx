import sprite from "../../assets/sprite.svg";
import {
  HeaderContainer,
  Logo,
  NavLinkFavoritesIcon,
  NavLinkIcon,
  NavList,
  StyledHeader,
  StyledNavLink,
} from "./AppBar.styled";

const AppBar = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo to="/">EasyRide</Logo>

        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/catalog">
                <NavLinkIcon>
                  <use href={`${sprite}#icon-car`}></use>
                </NavLinkIcon>
                Catalog
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/favorites">
                <NavLinkFavoritesIcon>
                  <use href={`${sprite}#icon-active`}></use>
                </NavLinkFavoritesIcon>
                Favorites
              </StyledNavLink>
            </li>
          </NavList>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default AppBar;
