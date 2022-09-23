import {
  StyledButtonHeader,
  StyledDivContainerPrice,
  StyledDivPrice,
  StyledDivSelect,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "../styledComponents/style";

export const RenderForm = ({ handleSubmit, description, setDescription, price, setPrice,setEntry }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="description">Descrição</StyledLabel>
      <StyledInput
        name="description"
        type="text"
        placeholder="Digite aqui sua descrição"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <StyledLabel>Ex: Compra de Roupas</StyledLabel>
      <StyledDivContainerPrice>
        <StyledDivPrice>
          <StyledLabel htmlFor="price">Valor</StyledLabel>
          <StyledInput
            name="price"
            type="number"
            placeholder="1"
            required
            value={price}
            onChange={(event) => setPrice(event.target.valueAsNumber)}
          />
        </StyledDivPrice>
        <StyledDivSelect>
          <StyledLabel htmlFor="typePrice">Tipo de Valor</StyledLabel>
          <StyledSelect
            name="typePrice"
            onChange={(event) => setEntry(event.target.value)}
          >
            <StyledOption value="Entrada">Entrada</StyledOption>
            <StyledOption value="Saida">Saída</StyledOption>
          </StyledSelect>
        </StyledDivSelect>
      </StyledDivContainerPrice>
      <StyledButtonHeader type="submit">Inserir Valor</StyledButtonHeader>
    </StyledForm>
  );
};
