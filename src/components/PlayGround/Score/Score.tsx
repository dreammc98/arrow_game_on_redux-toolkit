import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { setScore } from "../store/slices"

export const Score = () => {
  const dispatch = useAppDispatch()
  const steps = useAppSelector(state => state.playground.steps)
  const errors = useAppSelector(state => state.playground.totalErrors)
  const success = useAppSelector(state => state.playground.totalSuccessful)

  useEffect(() => {
    dispatch(setScore())
  }, [steps])

  return (
    <div>
      <h3>Score</h3>
      <span>Errors: {errors}</span>
      <br />
      <span>Successful: {success}</span>
    </div>
  )
}
