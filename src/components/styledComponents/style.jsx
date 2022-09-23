import styled from "styled-components";
import trashHover from "../../img/trash-hover.png"



export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: var(--grey-1);
`;
export const StyledDivContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 85%;
  }
`;
export const StyledLeftDiv = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  @media (min-width: 1024px) {
    padding-top: 0;
    text-align: left;
    align-items: flex-start;
    max-width: 17%;
  }
`;
export const StyledLogo = styled.img`
  width: 40%;
`;
export const StyledH1Title = styled.h1`
  font-size: var(--title-font-size-1);
  font-weight: var(--title-weigth-1);
  color: var(--grey-4);
  margin: 0;
`;
export const StyledH4Title = styled.h4`
  font-size: var(--headline-font-size-1);
  font-weight: var(--body-weight-1);
  color: var(--grey-4);
  margin: 0;
`;
export const StyledButton = styled.button`
  width: 60%;
  padding: 0.8rem 0.4rem;
  border: none;
  border-radius: var(--border-radius-1);
  font-weight: var(--title-weigth-1);
  background-color: var(--primary-color-1);
  color: var(--grey-4);
  transition: .5s;
  @media (min-width: 1024px) {
    width: 80%;
    :hover {
      transition: .5s;
      background-color: var(--primary-color-2);
    }
  }
`;
export const StyledExampleImg = styled.img`
  width: 100%;
  margin-top: 5rem;
  @media (min-width: 1024px) {
    width: 40%;
    margin-top: 0;
  }
`;
export const StyledHeader = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
  @media(min-width: 1024px){
    justify-content: space-around;
  }
`;
export const StyledDivHeader = styled.div`
  width: 25%;
  display: flex;
    justify-content: flex-end;
`;
export const StyledButtonHeader = styled(StyledButton)`
  width: 100%;
  height: 15%;
  transition: .5s;
`;
export const StyledMainHome = styled.main`
  height: max-content;
  width: 100vw;
  @media(min-width: 1024px){
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
export const StyledForm = styled.form`
  height: 350px;
  width: 90%;
  border: var(--border);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: var(--border-radius-1);
`;
export const StyledLabel = styled.label`
  color: var(--grey-1);
  font-size: var(--headline-font-size-1);
  font-weight: var(--body-weight-1);
`;

export const StyledInput = styled.input`
  background-color: var(--grey-4);
  padding: 0.8rem 0.8rem;
  width: 100%;
  border: none;
  font-size: var(--headline-font-size-1);
  font-weight: var(--body-weight-1);
  color: var(--grey-1);
`;
export const StyledDivContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const StyledDivPrice = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StyledDivSelect = styled(StyledDivPrice)`
  width: 55%;
`;

export const StyledSelect = styled.select`
  padding: 0.6rem 0.4rem;
  width: 100%;
  border: none;
  border-radius: var(--border-radius-1);
  background-color: var(--grey-4);
  font-size: var(--headline-font-size-1);
  font-weight: var(--body-weight-1);
  color: var(--grey-1);
  display: flex;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      var(--primary-color-1) 50%
    ),
    linear-gradient(135deg, var(--primary-color-1) 50%, transparent 50%),
    linear-gradient(to right, transparent, transparent);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;
  :focus {
    background-image: linear-gradient(45deg, var(--grey-4) 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, var(--grey-4) 50%),
      linear-gradient(to right, var(--primary-color-1), var(--primary-color-1));
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
`;

export const StyledOption = styled.option`
  font-size: var(--headline-font-size-1);
  font-weight: var(--body-weight-1);
`;
export const StyledTotalDiv = styled.div`
  height: max-content;
  width: 90%;
  border: var(--border);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: var(--border-radius-1);
`;
export const StyledDivValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledH2Title = styled.h2`
  font-size: var(--body-font-size-1);
  font-weight: var(--title-weigth-1);
  color: var(--grey-1);
  margin: 0;
`;
export const StyledPValue = styled.p`
  font-size: var(--body-font-size-1);
  font-weight: var(--title-weigth-1);
  color: var(--primary-color-1);
  margin: 0;
`;
export const StyledSpan = styled.span`
  color: var(--grey-1);
  font-size: var(--headline-font-size-1);
  font-weight: var(--body-weight-1);
`;
export const StyledButtonGrey = styled(StyledButtonHeader)`
  background-color: var(--grey-3);
  color: var(--grey-1);
  transition: .5s;

  @media(min-width: 1024px){
    width: 35%;
    :hover{
    background-color: var(--grey-2);
    transition: .5s;
  }
  }
`;

export const StyledDivResume = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  height: max-content;
  @media(min-width: 1024px){
    width: 55%
  }
`;

export const StyledDivResumeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledDivButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 60%;
`;
export const StyledUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
export const StyledLi = styled.li`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--grey-4);
  padding: 1rem;
  border-radius: var(--border-radius-1);
  transition: .5s;
  object-fit: cover;
  :hover{
    background-color: white;
    box-shadow: var(--shadow);
    transition: .5s;
  }
  
`;
export const StyledDivTitleResume = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: .5rem;
  width: 100%;
`
export const StyledTitleHeader = styled(StyledDivTitleResume)`
    width: 35%;
`
export const StyledButtonTrash = styled.button`
background: none;
border: none;
display: flex;
align-items: center;
    justify-content: center;
    width:22px;
    height: 22px;
    object-fit: contain;
    :hover img{
      content: url(${trashHover});
    }
`
export const StyledDivContainerMain = styled.div`
@media(min-width: 1024px){
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
}
`