import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ARR_ARROW_CODES, MAP_ARROW_CODES } from "../components/constants"
import { TMapArrowCodes } from "../components/types"

const initialState: PlaygroundState = {
  currentStep: 0,
  steps: [],
  isTimerActive: false,
  totalErrors: 0,
  totalSuccessful: 0,
  isVictory: null,
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep(state) {
      state.currentStep += 1
    },
    setSteps(state) {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)
      const arrow = ARR_ARROW_CODES[randomKeys] as keyof TMapArrowCodes
      state.steps.push({
        currentValue: MAP_ARROW_CODES[arrow],
        currentKey: null,
        comparison: null,
      })

      if (state.steps[state.currentStep - 2]?.comparison === null) {
        state.steps[state.currentStep - 2].comparison = false
        state.totalErrors += 1
      }
    },
    setPressedKey(state, action: PayloadAction<{ key: TPressedKey }>) {
      const lastElementArr = state.steps[state.currentStep - 1]
      if (lastElementArr.currentKey === null) {
        lastElementArr.currentKey = MAP_ARROW_CODES[action.payload.key]
        lastElementArr.comparison =
          lastElementArr.currentValue === lastElementArr.currentKey
      }
    },
    setIsTimerActive(state) {
      state.isTimerActive = !state.isTimerActive
    },

    setScore(state) {
      const currentObj = state.steps[state.currentStep - 1]?.comparison
      const prevObj = state.steps[state.currentStep - 2]?.comparison

      if (currentObj === true) {
        state.totalSuccessful += 1
      } else if (currentObj === false) {
        state.totalErrors += 1
      }

      if (state.totalSuccessful > 0 && currentObj === false) {
        state.totalSuccessful = 0
      }

      if (state.totalSuccessful === 3) {
        state.isVictory =
          "Ты победил... Но эта игра, не то, чем ты должен заниматься!"
      }
      if (state.totalErrors === 3) {
        state.isVictory =
          "Ты не лузер, если проиграл. Ты лузер, если проиграл и не попробовал еще раз!"
      }
    },
    newGame(state) {
      Object.assign(state, initialState)
    },
  },
})

export const {
  setCurrentStep,
  setSteps,
  setPressedKey,
  setIsTimerActive,
  setScore,
  newGame,
} = playgroundSlice.actions
export const playgroundReducer = playgroundSlice.reducer

export type PlaygroundState = {
  currentStep: number
  steps: PlaygroundSteps[]
  isTimerActive: boolean
  totalErrors: number
  totalSuccessful: number
  isVictory: string | null
}

export type PlaygroundSteps = {
  currentValue: string | null
  currentKey: string | null
  comparison: boolean | null
}

export type TPressedKey = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight"
