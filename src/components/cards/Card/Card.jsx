import PropTypes from "prop-types";
import {
  CardFavoriteBtn,
  CardFavoriteIconEmpty,
  CardFavoriteIconFilled,
  CardImg,
  CardImgWrapper,
  CardLearnMoreBtn,
  CardTag,
  CardTagList,
  CardTitleText,
  CardTitleWrapper,
  StyledCard,
} from "./Card.styled";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/favoritesSlice";

const Card = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites) ?? [];
  const isFavorite = favorites.some((favorite) => favorite.id === advert.id);

  const shortestFeatureString = [
    ...advert.accessories,
    ...advert.functionalities,
  ].sort((a, b) => a.length - b.length)[0];

  const cardTitleLength = advert.make.length + advert.model.length;

  const handleFavoriteBtnClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  return (
    <StyledCard>
      <CardImgWrapper>
        <CardImg src={advert.img} alt={`${advert.make} ${advert.model}`} />

        <CardFavoriteBtn
          type="button"
          className="favorite-btn"
          onClick={handleFavoriteBtnClick}
        >
          {isFavorite ? (
            <CardFavoriteIconFilled>
              <use href={`${sprite}#icon-active`}></use>
            </CardFavoriteIconFilled>
          ) : (
            <CardFavoriteIconEmpty>
              <use href={`${sprite}#icon-normal`}></use>
            </CardFavoriteIconEmpty>
          )}
        </CardFavoriteBtn>
      </CardImgWrapper>

      <CardTitleWrapper>
        <CardTitleText>
          {advert.make} {cardTitleLength < 20 && <span>{advert.model}</span>},{" "}
          {advert.year}
        </CardTitleText>
        <CardTitleText>{advert.rentalPrice}</CardTitleText>
      </CardTitleWrapper>

      <CardTagList>
        <li>
          <CardTag>{advert.address.split(",")[1]}</CardTag>
        </li>
        <li>
          <CardTag>{advert.address.split(",")[2]}</CardTag>
        </li>
        <li>
          <CardTag>{advert.rentalCompany}</CardTag>
        </li>
        <li>
          <CardTag>{advert.type}</CardTag>
        </li>
        <li>
          <CardTag>{advert.make}</CardTag>
        </li>
        <li>
          <CardTag>{advert.id}</CardTag>
        </li>
        <li>
          <CardTag>{shortestFeatureString}</CardTag>
        </li>
      </CardTagList>

      <CardLearnMoreBtn type="button">Learn more</CardLearnMoreBtn>
    </StyledCard>
  );
};

Card.propTypes = {
  advert: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
