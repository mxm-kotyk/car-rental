import { useEffect, useState } from "react";
import {
  useGetAdvertsPortionQuery,
  useGetAllAdvertsQuery,
} from "../redux/advertsApi";
import Filters from "../components/Filters/Filters";
import CardGrid from "../components/cards/CardGrid/CardGrid";
import Card from "../components/cards/Card/Card";
import Container from "../components/Container/Container";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import { useSelector } from "react-redux";

const filterAdverts = (adverts, filters) => {
  const { make, rentalPrice, mileageFrom, mileageTo } = filters;
  let filteredAdverts = adverts;

  if (make) {
    filteredAdverts = filteredAdverts.filter((advert) => advert.make === make);
  }
  if (rentalPrice) {
    filteredAdverts = filteredAdverts.filter(
      (advert) => +advert.rentalPrice.slice(1) < rentalPrice
    );
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

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);

  const { data: advertsPortion } = useGetAdvertsPortionQuery(page);
  const { data: allAdverts } = useGetAllAdvertsQuery();

  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    if (advertsPortion?.length > 0) {
      setAdverts((prev) => [...prev, ...advertsPortion]);
    }
  }, [advertsPortion]);

  const handleFormSubmit = () => {
    if (Object.values(filters).every((value) => value === "")) {
      if (page === 1) {
        setAdverts(advertsPortion);
      } else {
        setAdverts([]);
        setPage(1);
      }
    } else {
      const filteredAdverts = filterAdverts(allAdverts, filters);
      setAdverts(filteredAdverts);
    }
  };

  return (
    <>
      <Container>
        <Filters onFormSubmit={handleFormSubmit} />

        <CardGrid>
          {adverts &&
            adverts.map((advert) => <Card advert={advert} key={advert.id} />)}
        </CardGrid>

        {/* {adverts?.length !== statistic?.totalAds && ( */}
        <LoadMoreBtn handleLoadMore={() => setPage((prev) => prev + 1)} />
        {/* )} */}
      </Container>
    </>
  );
};

export default CatalogPage;
