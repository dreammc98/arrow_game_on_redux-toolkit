import { useAppSelector } from "../../../../app/hooks"
import { StyledHeading } from "../../../UI/StyledHeading/StyledHeading"
import { RandomArrows } from "./components/RandomArrows/RandomArrows"
import { WelcomeText } from "./components/WelcomeText/WelcomeText"

import s from "./randomKeys.module.css"

export const RandomKeys = () => {
  const steps = useAppSelector(state => state.playground.steps)

  return (
    <div className={s.wrapper}>
      <StyledHeading title="Random Keys" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {steps.length === 0 ? <WelcomeText /> : <RandomArrows />}
      </div>
    </div>
  )
}

// 2:11:38
