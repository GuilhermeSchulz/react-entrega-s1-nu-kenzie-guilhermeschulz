import { useState } from "react";
import "./App.css";
import { RenderHome } from "./components/HomePage";
import { LandingPage } from "./components/landingPage";
import { StyledButton, StyledButtonGrey } from "./components/styledComponents/style";

function App() {
  const [page, setPage] = useState(false);

  return (
    <>
      {page ? (
        <RenderHome>
          <StyledButtonGrey onClick={() => setPage(false)} type="button">
            Voltar
          </StyledButtonGrey>
        </RenderHome>
      ) : (
        <LandingPage>
          <StyledButton onClick={() => setPage(true)} type="button">
            Iniciar
          </StyledButton>
        </LandingPage>
      )}
    </>
  );
}

export default App;
