import PropTypes from "prop-types";
import { StyledTitle } from "./PageTitle.styled";

const PageTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
