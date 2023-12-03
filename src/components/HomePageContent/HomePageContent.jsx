import { useGetAllAdvertsQuery } from "../../redux/advertsApi";
import {
  ContentWrapper,
  HomePageLinkBtn,
  Slogan,
  SloganSubtext,
} from "./HomePageContent.styled";
import home_background from "../../assets/home-background-1x.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const HomePageContent = () => {
  const { data, error } = useGetAllAdvertsQuery();
  const statistic = data?.statistic;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const root = document.getElementById("root");

      root.style.cssText = `  background-image: url(${home_background});
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;`;
    }
    return () => {
      const root = document.getElementById("root");

      root.style.cssText = `  background-image: none;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;`;
    };
  }, [location.pathname]);

  const showError =
    error &&
    Notify.failure(
      `Oops... Something went wrong. Server says: ${error.error}. Try reloading the page`
    );

  return (
    <ContentWrapper>
      {showError}
      <Slogan>Renting a car has never been easier!</Slogan>
      <SloganSubtext>
        Choose from <span>{statistic ? statistic.totalAds : 36}</span> vehicles
        starting at <span>${statistic ? statistic.lowestPrice : 25}</span> per
        day.
      </SloganSubtext>
      <HomePageLinkBtn to="/catalog">Go to Catalog</HomePageLinkBtn>
    </ContentWrapper>
  );
};

export default HomePageContent;
