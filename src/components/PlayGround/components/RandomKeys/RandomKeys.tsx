import { useAppSelector } from "../../../../app/hooks"
import { PlaygroundSteps, setSteps } from "../../store/slices"
import { RandomArrows } from "./components/RandomArrows/RandomArrows"
import { WelcomeText } from "./components/WelcomeText/WelcomeText"

export const RandomKeys = () => {
  const steps = useAppSelector(state => state.playground.steps)

  return (
    <div>
      <h3>Random Keys</h3>
      <div style={{ display: "flex" }}>
        {steps.length === 0 ? <WelcomeText /> : <RandomArrows />}
      </div>
    </div>
  )
}

// 2:11:38
