import { useAppSelector } from "../../../../../../app/hooks"
import { PlaygroundSteps } from "../../../../store/slices"
import s from "./RandomArrows.module.css"

export const RandomArrows = () => {
  const steps = useAppSelector(state => state.playground.steps)

  const getStylesRandomArrows = (el: PlaygroundSteps): string => {
    if (el.comparison === true) {
      return s.iconSuccess
    } else if (el.comparison === false) {
      return s.iconUnsuccess
    } else {
      return s.icon
    }
  }

  return (
    <>
      {steps.map((el, index) => (
        <span className={`${s.arrow} ${getStylesRandomArrows(el)}`} key={index}>
          {el.currentValue}
        </span>
      ))}
    </>
  )
}
