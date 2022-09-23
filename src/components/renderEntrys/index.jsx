import { StyledButton, StyledButtonGrey, StyledButtonTrash, StyledDivButtons, StyledDivResume, StyledDivResumeHeader, StyledDivTitleResume, StyledH2Title, StyledLi, StyledPValue, StyledSpan, StyledTitleHeader, StyledUl } from "../styledComponents/style";
import placeholder from '../../img/placeholder.png'
import trash from '../../img/trash.png'
export const RenderEntries = ({listAllPayments, filterBtn,payment,removeItem}) => {
    return (
          <StyledDivResume>
          <StyledDivResumeHeader>
            <StyledH2Title>Resumo financeiro</StyledH2Title>
            <StyledDivButtons>
              <StyledButton
                onClick={(event) => {
                  listAllPayments(event);
                }}
              >
                Todos
              </StyledButton>
              <StyledButtonGrey
                id="Entrada"
                onClick={(event) => {
                  filterBtn(event);
                }}
              >
                Entradas
              </StyledButtonGrey>
              <StyledButtonGrey
                id="Saida"
                onClick={(event) => {
                  filterBtn(event);
                }}
              >
                Saidas
              </StyledButtonGrey>
            </StyledDivButtons>
          </StyledDivResumeHeader>
          <StyledUl>
            {payment.length !== 0 ? (
              payment.map((element, index) => {
                return (
                  <StyledLi key={element.description}>
                    <StyledDivTitleResume>
                      <StyledH2Title>{element.description}</StyledH2Title>
                      <StyledTitleHeader>
                        <StyledPValue>R$ {element.price}</StyledPValue>
                        <StyledButtonTrash>
                          <img
                            src={trash}
                            alt="Excluir"
                            onClick={(event) => {
                              removeItem(event, element);
                            }}
                          />
                        </StyledButtonTrash>
                      </StyledTitleHeader>
                    </StyledDivTitleResume>
                    <StyledSpan>{element.entry}</StyledSpan>
                  </StyledLi>
                );
              })
            ) : (
              <>
                <img src={placeholder} alt="Placeholder" />
                <img src={placeholder} alt="Placeholder" />
                <img src={placeholder} alt="Placeholder" />
              </>
            )}
          </StyledUl>
        </StyledDivResume>

    )
}