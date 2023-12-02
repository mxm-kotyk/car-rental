import PropTypes from "prop-types";
import { StyledLoadMoreBtn } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={handleLoadMore}>
      Load More
    </StyledLoadMoreBtn>
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
