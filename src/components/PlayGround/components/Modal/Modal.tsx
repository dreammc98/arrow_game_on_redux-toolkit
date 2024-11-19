import { useAppDispatch } from "../../../../app/hooks"
import { newGame } from "../../store/slices"

type Props = {
  description: string
}

export const Modal = ({ description }: Props) => {
  const dispatch = useAppDispatch()

  const setNewGame = () => {
    dispatch(newGame())
  }

  return (
    <div>
      {description}
      <button onClick={setNewGame}>New Game</button>
    </div>
  )
}
