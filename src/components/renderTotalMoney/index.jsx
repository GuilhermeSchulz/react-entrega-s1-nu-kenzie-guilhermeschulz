import { StyledDivValue, StyledH2Title, StyledPValue, StyledSpan, StyledTotalDiv } from "../styledComponents/style"

export const RenderTotalMoney = ({payment, allMoneyEntry, allMoneyLeaving}) => {
return (    
  <>
       {
        payment.length !== 0 ?
        (<StyledTotalDiv>
          <StyledDivValue>
            <StyledH2Title>Valor Total:</StyledH2Title>
            <StyledPValue>R$ {allMoneyEntry-allMoneyLeaving}</StyledPValue>
          </StyledDivValue>
          <StyledSpan>O valor se refere ao saldo</StyledSpan>
        </StyledTotalDiv>)
        :
        (<></>)
      }
  </> 
      )
}