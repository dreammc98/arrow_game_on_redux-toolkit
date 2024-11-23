import { useAppSelector } from "../../../../../../app/hooks"
import { StyledSpan } from "../../../../../UI/StyledSpan/StyledSpan"
import loader from "../../../../../../assets/images/loader.svg"

import s from "../../randomKeys.module.css"

export const WelcomeText = () => {
  const isTimerActive = useAppSelector(state => state.playground.isTimerActive)

  const content = isTimerActive ? (
    <span className={s.icon}>
      <img src={loader} alt="" style={{ width: "40px" }} />
    </span>
  ) : (
    <StyledSpan
      text={
        'Press "Play" to start the game and wait for the first arrow to appear'
      }
    />
  )

  return content
}
