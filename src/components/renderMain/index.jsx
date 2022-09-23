import { useState } from "react";
import { RenderEntries } from "../renderEntrys";
import { RenderForm } from "../RenderFormInput";
import { RenderTotalMoney } from "../renderTotalMoney";
import {
  StyledDivContainerMain,
  StyledMainHome,
} from "../styledComponents/style";
export const RenderMain = () => {
  const [payment, setPayment] = useState([]);
  const [allPayments, setPayments] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [entry, setEntry] = useState("Entrada");

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    setPayment([...payment, { description, price, entry }]);
    setPayments([...allPayments, { description, price, entry }]);

    setDescription("");
    setPrice("");
  };
  const removeItem = (event, elem) => {
    event.preventDefault();
    setPayment(
      payment.filter((element) => {
        return elem.description !== element.description;
      })
    );
    setPayments(
      allPayments.filter((element) => {
        return elem.description !== element.description;
      })
    );
  };

  const filterBtn = (event) => {
    event.preventDefault();

    setPayment(
      payment.filter((element) => {
        console.log(element);
        return element.entry === event.target.id;
      })
    );
  };
  console.log(payment)
  const listAllPayments = (event) => {
    event.preventDefault();
    setPayment([]);
    return setPayment(allPayments.map((element) => element));
  };
  const allMoneyEntry = allPayments
    .map((element) => (element.entry === "Entrada" ? element.price : false))
    .reduce((a, b) => a + b, 0);

  const allMoneyLeaving = allPayments
    .map((element) => (element.entry === "Saida" ? element.price : false))
    .reduce((a, b) => a + b, 0);
  return (
    <StyledMainHome>
      <StyledDivContainerMain>
        <RenderForm
          handleSubmit={handleSubmit}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          setEntry={setEntry}
        />
        <RenderTotalMoney
          payment={payment}
          allMoneyEntry={allMoneyEntry}
          allMoneyLeaving={allMoneyLeaving}
        />
      </StyledDivContainerMain>
        <RenderEntries
          listAllPayments={listAllPayments}
          filterBtn={filterBtn}
          payment={payment}
          removeItem={removeItem}
        />
    </StyledMainHome>
  );
};
