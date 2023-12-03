import PropTypes from "prop-types";
import { Text, Title, Wrapper } from "./NoResults.styled";

const NoResults = ({ type }) => {
  if (type === "catalog") {
    return (
      <Wrapper>
        <Title>Sorry, no results were found</Title>
        <Text>
          Please try changing the search parameters. If the problem persists,
          consider refreshing the page
        </Text>
      </Wrapper>
    );
  }

  if (type === "favorites") {
    return (
      <Wrapper>
        <Title>Currently, there is nothing here</Title>
        <Text>Add adverts to your Favorites to see them appear here.</Text>
      </Wrapper>
    );
  }
};

NoResults.propTypes = {
  type: PropTypes.string.isRequired,
};
export default NoResults;
