import logo from "../../img/logo-light-mode.png";
import { StyledDivHeader, StyledHeader } from "../styledComponents/style";

export const RenderHeader = ({children}) => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo NuKenzie" />
      <StyledDivHeader>{children}</StyledDivHeader>
    </StyledHeader>
  );
};
