import { useEffect, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { TPressedKey, setPressedKey } from "../../store/slices"
import { ARR_ARROW_CODES } from "../constants"
import hourGlass from "../../../../assets/images/hourGlass.svg"
import { StyledHeading } from "../../../UI/StyledHeading/StyledHeading"
import { StyledSpan } from "../../../UI/StyledSpan/StyledSpan"

import s from "./keyPressed.module.css"

export const KeyPressed = () => {
  const dispatch = useAppDispatch()
  const currentKey = useAppSelector(
    state => state.playground.steps.at(-1)?.currentKey,
  )
  const isTimerActive = useAppSelector(state => state.playground.isTimerActive)

  const handleKeyPress = (e: KeyboardEvent) => {
    if (ARR_ARROW_CODES.includes(e.key) && isTimerActive) {
      dispatch(setPressedKey({ key: e.key as TPressedKey }))
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)

    if (currentKey) {
      document.removeEventListener("keydown", handleKeyPress)
    }

    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [currentKey])

  return (
    <div>
      <StyledHeading title="Key pressed" />
      <StyledSpan
        text={'Press the key corresponding to the key in "Random keys"'}
      />
      <div className={s.icon}>
        {currentKey ? currentKey : <img src={hourGlass} alt="hourglass" />}
      </div>
    </div>
  )
}
