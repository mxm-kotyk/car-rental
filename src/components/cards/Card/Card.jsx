import PropTypes from "prop-types";
import {
  CardFavoriteBtn,
  CardImg,
  CardImgWrapper,
  CardLearnMoreBtn,
  CardTag,
  CardTagList,
  CardTitleText,
  CardTitleWrapper,
  StyledCard,
} from "./Card.styled";

const Card = ({ advert }) => {
  const shortestFeatureString = [
    ...advert.accessories,
    ...advert.functionalities,
  ].sort((a, b) => a.length - b.length)[0];

  const cardTitleLength = advert.make.length + advert.model.length;

  return (
    <StyledCard>
      <div>
        <CardImgWrapper>
          <CardImg src={advert.img} alt={`${advert.make} ${advert.model}`} />
          <CardFavoriteBtn type="button">Add</CardFavoriteBtn>
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
      </div>
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

// {
//     "id": 9582,
//     "year": 2008,
//     "make": "Buick",
//     "model": "Enclave",
//     "type": "SUV",
//     "img": "https://consumerguide.com/wp-content/uploads/2016/04/08121501990001.jpg",
//     "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//     "fuelConsumption": "10.5",
//     "engineSize": "3.6L V6",
//     "accessories": [
//       "Leather seats",
//       "Panoramic sunroof",
//       "Premium audio system"
//     ],
//     "functionalities": [
//       "Power liftgate",
//       "Remote start",
//       "Blind-spot monitoring"
//     ],
//     "rentalPrice": "$40",
//     "rentalCompany": "Luxury Car Rentals",
//     "address": "123 Example Street, Kiev, Ukraine",
//     "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//     "mileage": 5858
//   },

export default Card;
