import logo from "../../img/logo-dark-mode.png";
import imageExample from "../../img/illustration.svg";
import "../GlobalStyles/styles.css";
import {
  MainContainer,
  StyledDivContainer,
  StyledExampleImg,
  StyledH1Title,
  StyledH4Title,
  StyledLeftDiv,
  StyledLogo,
} from "../styledComponents/style";


export const LandingPage = ({children}) => {
  return (
    <MainContainer>
      <StyledDivContainer>
        <StyledLeftDiv>
          <StyledLogo src={logo} alt="Logo NuKenzie" />
          <StyledH1Title>Centralize o controle das suas finanças</StyledH1Title>
          <StyledH4Title>de forma rápida e segura</StyledH4Title>
          {children}
        </StyledLeftDiv>
        <StyledExampleImg src={imageExample} alt="Imagem de exemplo" />
      </StyledDivContainer>
    </MainContainer>
  );
};
