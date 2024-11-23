import { useAppDispatch } from "../../../../app/hooks"
import { Button } from "../../../UI/Button/Button"
import { setIsTimerActive } from "../../store/slices"
import { PlayArrow, Pause } from "@mui/icons-material"

import s from "./Controls.module.css"

type Props = {
  isTimerActive: boolean
}

export const Controls = ({ isTimerActive }: Props) => {
  const dispatch = useAppDispatch()

  const switchTimer = () => {
    dispatch(setIsTimerActive())
  }

  return (
    <div>
      <Button
        onClick={switchTimer}
        disabled={isTimerActive}
        endIcon={<PlayArrow />}
        style={{ marginRight: "10px" }}
      >
        Start
      </Button>
      <Button
        onClick={switchTimer}
        disabled={!isTimerActive}
        endIcon={<Pause />}
      >
        Pause
      </Button>
    </div>
  )
}

//20:14
