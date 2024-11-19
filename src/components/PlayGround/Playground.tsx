import { useRef, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setIsTimerActive, setSteps } from "./store/slices"
import { Controls } from "./components/Controls/Controls"
import { RandomKeys } from "./components/RandomKeys/RandomKeys"
import { KeyPressed } from "./components/KeyPressed/KeyPressed"
import { Score } from "./Score/Score"
import { Modal } from "./components/Modal/Modal"

export const Playground = () => {
  const currentStep = useAppSelector(state => state.playground.currentStep)
  const isTimerActive = useAppSelector(state => state.playground.isTimerActive)
  const isVictory = useAppSelector(state => state.playground.isVictory)

  const dispatch = useAppDispatch()

  let intervalId = useRef<ReturnType<typeof setInterval>>(0)
  useEffect(() => {
    if (isTimerActive) {
      intervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, 3000)
    } else {
      clearInterval(intervalId.current)
    }
    if (isVictory && isTimerActive) {
      clearInterval(intervalId.current)
      dispatch(setIsTimerActive())
    }
    return () => {
      clearInterval(intervalId.current)
    }
  }, [isTimerActive, isVictory])

  return (
    <div>
      <RandomKeys />
      {currentStep}
      <Controls isTimerActive={isTimerActive} />
      {isTimerActive && <KeyPressed />}
      <Score />
      {isVictory && <Modal description={isVictory} />}
    </div>
  )
}

// нужно продумать где будет находиться логика выигрыша или проигрыша. прописать логику и пропсы для модалки под логику
// 1:41:43
