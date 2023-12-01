import { useState } from "react";
import {
  useGetAdvertsQuery,
  useGetTotalAdvertsCountQuery,
} from "../redux/advertsApi";
import Filters from "../components/Filters/Filters";
import CardGrid from "../components/cards/CardGrid/CardGrid";
import Card from "../components/cards/Card/Card";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAdvertsQuery(page);
  const { data: totalCount } = useGetTotalAdvertsCountQuery();
  console.log(totalCount);

  return (
    <>
      <Filters />
      <CardGrid>
        {data && data.map((advert) => <Card advert={advert} key={advert.id} />)}
      </CardGrid>
      <button
        type="button"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={data?.length === totalCount}
      >
        Load More
      </button>
    </>
  );
};

export default CatalogPage;
