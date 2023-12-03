import { useSelector } from "react-redux";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/cards/Card";
import CardGrid from "../components/cards/CardGrid";
import PageTitle from "../components/PageTitle";
import NoResults from "../components/NoResults/NoResults";

const FavoritesPage = () => {
  const favorites = useSelector((store) => store.favorites.favorites) ?? [];

  return (
    <>
      <Section>
        <Container>
          <PageTitle>Favorites</PageTitle>
          {favorites.length > 0 ? (
            <CardGrid>
              {favorites.map((advert) => (
                <Card advert={advert} key={advert.id} />
              ))}
            </CardGrid>
          ) : (
            <NoResults type="favorites" />
          )}
        </Container>
      </Section>
    </>
  );
};

export default FavoritesPage;
