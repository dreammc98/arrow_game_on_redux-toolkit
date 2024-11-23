import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setScore } from "../../store/slices"
import { StyledHeading } from "../../../UI/StyledHeading/StyledHeading"
import { StyledSpan } from "../../../UI/StyledSpan/StyledSpan"
import { Chip } from "@mui/material"

import s from "./score.module.css"

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
      <StyledHeading title="Score" />
      <StyledSpan text='On error, the "Consecutive successful hits" value is reset to zero' />

      <Chip
        label={
          <>
            Errors: <span className={s.count}>{errors}</span>
          </>
        }
        style={{ marginRight: "10px" }}
        variant="outlined"
        className={s.chipErrors}
      />
      <Chip
        label={
          <>
            Successful: <span className={s.count}>{success}</span>
          </>
        }
        variant="outlined"
        className={s.chipSuccessful}
      />
    </div>
  )
}
