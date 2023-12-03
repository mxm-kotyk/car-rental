import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetAdvertsPortionQuery,
  useGetAllAdvertsQuery,
} from "../redux/advertsApi";
import Filters from "../components/Filters";
import CardGrid from "../components/cards/CardGrid";
import Card from "../components/cards/Card";
import Container from "../components/Container";
import LoadMoreBtn from "../components/LoadMoreBtn";
import { filterAdverts } from "../helpers/advertsFilter";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader/Loader";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import NoResults from "../components/NoResults/NoResults";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(false);
  const [toggleLoadMoreFunc, setToggleLoadMoreFunc] = useState(false);

  const {
    data: advertsPortion,
    isLoading: isLoadingAdvertsPortion,
    error: advertsPortionError,
  } = useGetAdvertsPortionQuery(page);

  const {
    data,
    isLoading: isLoadingAllAdverts,
    error: allAdvertsError,
  } = useGetAllAdvertsQuery();
  const allAdverts = data?.allAdverts;
  const statistic = data?.statistic;

  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    setAdverts([]);
  }, []);

  useEffect(() => {
    if (advertsPortion?.length > 0) {
      setAdverts((prev) => [...prev, ...advertsPortion]);
    }
  }, [advertsPortion]);

  useEffect(() => {
    if (adverts.length >= 12) {
      setIsLoadMoreVisible(true);
    }
    if (adverts.length === statistic?.totalAds || toggleLoadMoreFunc) {
      setIsLoadMoreVisible(false);
    }
  }, [adverts.length, statistic?.totalAds, toggleLoadMoreFunc]);

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
      setToggleLoadMoreFunc(true);
      setAdverts(filteredAdverts);
    }
  };

  const handleBackendPagination = () => {
    setPage((prev) => prev + 1);
  };

  const loadingAllAdvertsIndicator = isLoadingAllAdverts && <Loader />;
  const loadingPortionIndicator = isLoadingAdvertsPortion && <Loader />;
  const showPortionError =
    advertsPortionError &&
    Notify.failure(
      `Oops... Something went wrong. Server says: ${advertsPortionError.error}. Try reloading the page`
    );
  const showAllAdvertsError =
    allAdvertsError &&
    Notify.failure(
      `Oops... Something went wrong. Server says: ${allAdvertsError.error}. Try reloading the page`
    );

  return (
    <>
      <Section>
        <Container>
          {loadingAllAdvertsIndicator}
          {loadingPortionIndicator}
          {showPortionError}
          {showAllAdvertsError}
          <PageTitle>Catalog</PageTitle>
          <Filters onFormSubmit={handleFormSubmit} />
          <CardGrid>
            {adverts.length > 0 ? (
              adverts.map((advert) => <Card advert={advert} key={advert.id} />)
            ) : (
              <NoResults type="catalog" />
            )}
          </CardGrid>
          {isLoadMoreVisible && (
            <LoadMoreBtn
              handleLoadMore={
                toggleLoadMoreFunc
                  ? () => isLoadMoreVisible(false)
                  : handleBackendPagination
              }
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default CatalogPage;
