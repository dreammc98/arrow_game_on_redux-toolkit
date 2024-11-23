import { useRef, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setIsTimerActive, setSteps } from "./store/slices"
import { Controls } from "./components/Controls/Controls"
import { RandomKeys } from "./components/RandomKeys/RandomKeys"
import { KeyPressed } from "./components/KeyPressed/KeyPressed"
import { Score } from "./components/Score/Score"
import { ModalM } from "./components/Modal/Modal"
import { Description } from "./components/Description/Description"

import s from "./playground.module.css"

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
    <div className={s.container}>
      <div className={s.wrapper}>
        <div>
          <RandomKeys />
          <KeyPressed />
        </div>
        <div>
          <Score />
        </div>
      </div>
      <div className={s.wrapper}>
        <Description />
        <Controls isTimerActive={isTimerActive} />
      </div>
      {isVictory && <ModalM description={isVictory} />}
    </div>
  )
}
