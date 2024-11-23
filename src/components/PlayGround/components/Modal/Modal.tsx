import { useAppDispatch } from "../../../../app/hooks"
import { Button } from "../../../UI/Button/Button"
import { newGame } from "../../store/slices"
import { Modal } from "@mui/material"

import * as React from "react"

import s from "./modal.module.css"

type Props = {
  description: string
}

export const ModalM = ({ description }: Props) => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)

  const setNewGame = () => {
    dispatch(newGame())
  }

  return (
    <Modal open={open} className={s.wrapper}>
      <div className={s.modal}>
        <span className={s.text}> {description}</span>

        <Button onClick={setNewGame} className={s.btn}>
          New Game
        </Button>
      </div>
    </Modal>
  )
}
