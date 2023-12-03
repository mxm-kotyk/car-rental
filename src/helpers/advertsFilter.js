export const filterAdverts = (adverts, filters) => {
  const { make, rentalPrice, mileageFrom, mileageTo } = filters;
  let filteredAdverts = adverts;

  if (make) {
    filteredAdverts = filteredAdverts.filter((advert) => advert.make === make);
  }
  if (rentalPrice) {
    filteredAdverts = filteredAdverts.filter((advert) => {
      return +advert.rentalPrice.slice(1) < rentalPrice;
    });
  }
  if (mileageFrom) {
    filteredAdverts = filteredAdverts.filter(
      (advert) => advert.mileage > mileageFrom
    );
  }
  if (mileageTo) {
    filteredAdverts = filteredAdverts.filter(
      (advert) => advert.mileage < mileageTo
    );
  }
  return filteredAdverts;
};
