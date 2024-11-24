import { expect, test } from "vitest"
import {
  playgroundReducer,
  initialState,
  setCurrentStep,
  setSteps,
  setPressedKey,
  setIsTimerActive,
  newGame,
} from "./slices"

test("check initial state", () => {
  const state = playgroundReducer(undefined, { type: "unknown" })

  expect(state).toEqual(initialState)
})

test("currentStep should be increased by one", () => {
  const state = playgroundReducer(initialState, setCurrentStep())

  expect(initialState.currentStep).toBe(0)
  expect(state.currentStep).toBe(1)
})

test("setSteps", () => {
  const state = { ...playgroundReducer(initialState, setSteps()) }

  const firstStep = {
    currentValue: state.steps[0].currentValue,
    currentKey: null,
    comparison: null,
  }

  expect(initialState.steps.length).toBe(0)
  expect(state.steps.length).toBe(1)
  expect(state.steps[0]).toEqual(firstStep)

  state.currentStep = 2
  const newState = playgroundReducer(state, setSteps())

  expect(newState.steps[newState.currentStep - 2].comparison).toBe(false)
  expect(newState.totalErrors).toBe(1)
})

test("setPressedKey", () => {
  const initialStateKey = {
    currentStep: 2,
    steps: [
      { currentValue: "initialValue", currentKey: null, comparison: null },
      {
        currentValue: "ArrowUp",
        currentKey: "ArrowUp",
        comparison: null,
      },
    ],
    isTimerActive: false,
    totalErrors: 0,
    totalSuccessful: 0,
    isVictory: null,
  }

  const state = playgroundReducer(
    initialStateKey,
    setPressedKey({ key: "ArrowUp" }),
  )

  const lastElementArr = state.steps[state.currentStep - 1]

  if (lastElementArr.currentKey === null) {
    lastElementArr.currentKey = "ArrowUp"
    lastElementArr.comparison =
      lastElementArr.currentValue === lastElementArr.currentKey
  }

  expect(lastElementArr.currentKey).toBe("ArrowUp")
})

test("setIsTimerActive", () => {
  const state = { ...initialState }

  const newStateTrue = playgroundReducer(state, setIsTimerActive())
  const newStateFalse = playgroundReducer(newStateTrue, setIsTimerActive())

  expect(state.isTimerActive).toBe(false)
  expect(newStateTrue.isTimerActive).toBe(true)
  expect(newStateFalse.isTimerActive).toBe(false)
})

test("newGame", () => {
  const finishedGameState = {
    currentStep: 3,
    steps: [
      { currentValue: "", currentKey: null, comparison: null },
      { currentValue: "", currentKey: null, comparison: null },
      { currentValue: "", currentKey: null, comparison: null },
    ],
    isTimerActive: false,
    totalErrors: 0,
    totalSuccessful: 0,
    isVictory: null,
  }
  const newGameState = playgroundReducer(finishedGameState, newGame())

  expect(newGameState).toEqual(initialState)
})
