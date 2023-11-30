import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/thunks";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.adverts);

  console.log(adverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>
            <img src={advert.img} alt={`${advert.make} ${advert.model}`} />
            <p>
              {advert.id} {advert.make} {advert.model} {advert.year}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogPage;
