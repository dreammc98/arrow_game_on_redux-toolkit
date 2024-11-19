import { useAppDispatch } from "../../../../app/hooks"
import { setIsTimerActive } from "../../store/slices"

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
      <button onClick={switchTimer} disabled={isTimerActive}>
        Start
      </button>
      <button onClick={switchTimer} disabled={!isTimerActive}>
        Pause
      </button>
    </div>
  )
}
