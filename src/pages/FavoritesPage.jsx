import { useSelector } from "react-redux";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/cards/Card";
import CardGrid from "../components/cards/CardGrid";
import PageTitle from "../components/PageTitle";

const FavoritesPage = () => {
  const favorites = useSelector((store) => store.favorites.favorites) ?? [];

  return (
    <>
      <Section>
        <Container>
          <PageTitle>Favorites</PageTitle>
          <CardGrid>
            {favorites &&
              favorites.map((advert) => (
                <Card advert={advert} key={advert.id} />
              ))}
          </CardGrid>
        </Container>
      </Section>
    </>
  );
};

export default FavoritesPage;
