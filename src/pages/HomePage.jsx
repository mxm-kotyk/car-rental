import Container from "../components/Container";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import { HomePageSection } from "../components/HomePageContent/HomePageContent.styled";

const HomePage = () => {
  return (
    <>
      <HomePageSection>
        <Container>
          <HomePageContent />
        </Container>
      </HomePageSection>
    </>
  );
};

export default HomePage;
