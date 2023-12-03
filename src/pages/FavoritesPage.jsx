import { useSelector } from "react-redux";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import Card from "../components/cards/Card/Card";
import CardGrid from "../components/cards/CardGrid/CardGrid";
import PageTitle from "../components/PageTitle/PageTitle";

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
