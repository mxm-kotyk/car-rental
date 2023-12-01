import { useState } from "react";
import {
  useGetAdvertsQuery,
  useGetTotalAdvertsCountQuery,
} from "../redux/advertsApi";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAdvertsQuery(page);
  const { data: totalCount } = useGetTotalAdvertsCountQuery();
  console.log(totalCount);

  return (
    <>
      <h1>Catalog</h1>
      <ul>
        {data &&
          data.map((advert) => (
            <li key={advert.id}>
              <img src={advert.img} alt={`${advert.make} ${advert.model}`} />
              <p>
                {advert.id} {advert.make} {advert.model} {advert.year}
              </p>
            </li>
          ))}
      </ul>
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
