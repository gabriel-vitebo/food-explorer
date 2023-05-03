import { Container } from "./styles"
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"

export function NewIngredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <AiOutlinePlus size={15} /> : <AiOutlineClose size={15} />}
      </button>
    </Container>
  )
}
