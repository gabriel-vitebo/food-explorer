import { useState } from "react";
import { Container } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";
import { BsPencil } from "react-icons/bs";
import { Amount } from "../../components/Amount";
import { ButtonBg } from "../../components/ButtonBg";

export function Card({
  isAdm,
  name,
  price,
  image,
  openDetails,
  editFood,
  amount,
  addMore,
  remove,
  addToCart,
  handleFavorite,
  isFavorite,
  description,
}) {
  function calcultePrice() {
    if (amount === 0) {
      return price;
    }
    return price * amount;
  }

  const calculatedPrice = calcultePrice();

  return (
    <Container favorite={isFavorite} isFavorite={isFavorite}>
      {isAdm ? (
        <BsPencil size={25} onClick={editFood} />
      ) : isFavorite ? (
        <MdFavorite size={25} onClick={handleFavorite} />
      ) : (
        <MdFavoriteBorder size={25} onClick={handleFavorite} />
      )}

      <img src={image} alt="foto do prato" />
      <div className="foodname">
        <h3 onClick={openDetails}>{name}</h3>
        <RxCaretRight size={20} className="iconToDesktop" />
      </div>
      <p className="toDesktop">{description}</p>
      <span>R${Number(calculatedPrice).toFixed(2)}</span>
      <div className="finishBuy">
        <Amount
          number={amount}
          isAdm={isAdm}
          addMore={addMore}
          remove={remove}
          className={"amountStyle"}
        />
        <ButtonBg title={"incluir"} isAdm={isAdm} onClick={addToCart} />
      </div>
    </Container>
  );
}
