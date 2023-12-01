import PropTypes from "prop-types";
import { StyledList } from "./CardGrid.styled";

const CardGrid = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardGrid;
