import { useState } from "react";
import {
  useGetAdvertsQuery,
  useGetAdvertsStatisticsQuery,
} from "../redux/advertsApi";
import Filters from "../components/Filters/Filters";
import CardGrid from "../components/cards/CardGrid/CardGrid";
import Card from "../components/cards/Card/Card";
import Container from "../components/Container/Container";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const { data: adverts } = useGetAdvertsQuery(page);
  const { data: statistic } = useGetAdvertsStatisticsQuery();
  console.log(statistic);

  return (
    <>
      <Container>
        <Filters />

        <CardGrid>
          {adverts &&
            adverts.map((advert) => <Card advert={advert} key={advert.id} />)}
        </CardGrid>

        {adverts?.length !== statistic?.totalAds && (
          <LoadMoreBtn handleLoadMore={() => setPage((prev) => prev + 1)} />
        )}
      </Container>
    </>
  );
};

export default CatalogPage;
