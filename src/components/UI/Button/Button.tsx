import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"

import s from "./button.module.css"

export interface Props extends MaterialButtonProps {}

export const Button = (props: Props) => {
  const { children } = props

  return (
    <MaterialButton
      variant="contained"
      size="small"
      className={s.button}
      {...props}
    >
      {children}
    </MaterialButton>
  )
}
