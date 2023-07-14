import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Container, Receipt } from "./styles";
import { ButtonBg } from "../ButtonBg";
import { OpenMenu } from "../OpenMenu";
import { CloseMenu } from "../CloseMenu";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Menu } from "../Menu";

import { TfiReceipt } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

export function Header({ amount, searchingFood }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isAdm, setIsAdm] = useState(user.isAdm);

  function backToHome() {
    navigate("/");
  }

  function createFood() {
    navigate("/newfood/:id");
  }

  return (
    <Container>
      {openMenu ? (
        <CloseMenu
          title={"Menu"}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      ) : (
        <OpenMenu
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      )}
      {!openMenu && <Logo isAdm={isAdm} onClick={backToHome} />}
      <Input
        toDesktop={"toDesktop input"}
        icon={AiOutlineSearch}
        placeholder={"Busque por pratos ou ingredientes"}
        onChange={searchingFood}
      />

      {!openMenu && (
        <Receipt isAdm={isAdm}>
          <TfiReceipt size={26} />
          <span>{amount}</span>
        </Receipt>
      )}

      {isAdm ? (
        <ButtonBg
          className={"buttonAdm"}
          title={"Novo Prato"}
          onClick={createFood}
        />
      ) : (
        <ButtonBg
          className={"toDesktop button"}
          icon={TfiReceipt}
          amount={`pedidos (${amount})`}
        />
      )}

      <GoSignOut size={26} className={"toDesktop exit"} onClick={signOut} />

      {openMenu && <Menu isAdm={isAdm} />}
    </Container>
  );
}
