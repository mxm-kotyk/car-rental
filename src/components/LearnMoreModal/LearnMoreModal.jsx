import PropTypes from "prop-types";
import {
  LearnMoreDescription,
  LearnMoreFeaturesList,
  LearnMoreFeaturesWrapper,
  LearnMoreImg,
  LearnMoreLinkBtn,
  LearnMoreModalWrapper,
  LearnMoreRentalCondItem,
  LearnMoreRentalCondList,
  LearnMoreRentalCondText,
  LearnMoreSubtitle,
  LearnMoreTag,
  LearnMoreTagList,
  LearnMoreTitle,
} from "./LearnMoreModal.styled";

const LearnMoreModal = ({ advert }) => {
  const mileageString = [
    advert.mileage.toString().slice(0, 1),
    ",",
    advert.mileage.toString().slice(1),
  ].join("");

  const rentalConditions = advert.rentalConditions.split("\n").map((el) => (
    <LearnMoreRentalCondItem key={el}>
      <LearnMoreRentalCondText>
        {el.includes(":")
          ? el
              .split(":")
              .map((subEl, i) =>
                i === 1 ? <span key={i}>{subEl}</span> : subEl + ":"
              )
          : el}
      </LearnMoreRentalCondText>
    </LearnMoreRentalCondItem>
  ));

  console.log(advert);
  return (
    <LearnMoreModalWrapper>
      <LearnMoreImg src={advert.img} alt={`${advert.make} ${advert.model}`} />

      <LearnMoreTitle>
        {advert.make} <span>{advert.model}</span>, {advert.year}
      </LearnMoreTitle>

      <LearnMoreTagList>
        <li>
          <LearnMoreTag>{advert.address.split(",")[1]}</LearnMoreTag>
        </li>
        <li>
          <LearnMoreTag>{advert.address.split(",")[2]}</LearnMoreTag>
        </li>
        <li>
          <LearnMoreTag>{advert.id}</LearnMoreTag>
        </li>
        <li>
          <LearnMoreTag>Year: {advert.year}</LearnMoreTag>
        </li>
        <li>
          <LearnMoreTag>Type: {advert.type}</LearnMoreTag>
        </li>
        <li>
          <LearnMoreTag>
            Fuel Consumption: {advert.fuelConsumption}
          </LearnMoreTag>
        </li>
        <li>
          <LearnMoreTag>Engine Size: {advert.engineSize}</LearnMoreTag>
        </li>
      </LearnMoreTagList>
      <LearnMoreDescription>{advert.description}</LearnMoreDescription>

      <LearnMoreSubtitle>Accessories and functionalities:</LearnMoreSubtitle>
      <LearnMoreFeaturesWrapper>
        <LearnMoreFeaturesList>
          {advert.accessories.map((el) => (
            <li key={el}>
              <LearnMoreTag>{el}</LearnMoreTag>
            </li>
          ))}
        </LearnMoreFeaturesList>
        <LearnMoreFeaturesList>
          {advert.functionalities.map((el) => (
            <li key={el}>
              <LearnMoreTag>{el}</LearnMoreTag>
            </li>
          ))}
        </LearnMoreFeaturesList>
      </LearnMoreFeaturesWrapper>

      <LearnMoreSubtitle>Rental Conditions:</LearnMoreSubtitle>
      <LearnMoreRentalCondList>
        {rentalConditions}
        <LearnMoreRentalCondItem>
          <LearnMoreRentalCondText>
            Mileage: <span>{mileageString}</span>
          </LearnMoreRentalCondText>
        </LearnMoreRentalCondItem>
        <LearnMoreRentalCondItem>
          <LearnMoreRentalCondText>
            Price: <span>{advert.rentalPrice}</span>
          </LearnMoreRentalCondText>
        </LearnMoreRentalCondItem>
      </LearnMoreRentalCondList>
      <LearnMoreLinkBtn href="tel:+380730000000">Rental car</LearnMoreLinkBtn>
    </LearnMoreModalWrapper>
  );
};

LearnMoreModal.propTypes = {
  advert: PropTypes.object.isRequired,
  id: PropTypes.number,
  year: PropTypes.number,
  mileage: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  rentalPrice: PropTypes.string,
  address: PropTypes.string,
  rentalCompany: PropTypes.string,
  rentalConditions: PropTypes.string,
  description: PropTypes.string,
  fuelConsumption: PropTypes.string,
  engineSize: PropTypes.string,
  functionalities: PropTypes.arrayOf(PropTypes.string),
  accessories: PropTypes.arrayOf(PropTypes.string),
};

export default LearnMoreModal;
