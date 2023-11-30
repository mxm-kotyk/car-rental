import { useState } from "react";
import { useGetAllAdvertsQuery } from "../redux/advertsApi";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllAdvertsQuery(page);

  console.log(data);

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
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        Load More
      </button>
    </>
  );
};

export default CatalogPage;
