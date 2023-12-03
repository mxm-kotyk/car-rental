import { useGetAllAdvertsQuery } from "../../redux/advertsApi";
import {
  ContentWrapper,
  HomePageLinkBtn,
  Slogan,
  SloganSubtext,
} from "./HomePageContent.styled";

const HomePageContent = () => {
  const { data } = useGetAllAdvertsQuery();
  const statistic = data?.statistic;

  return (
    <ContentWrapper>
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
