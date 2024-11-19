import { useAppSelector } from "../../../../../../app/hooks"

export const WelcomeText = () => {
  const isTimerActive = useAppSelector(state => state.playground.isTimerActive)

  const content = isTimerActive ? (
    "loader"
  ) : (
    <span>
      Press "Play" to start the game and wait for the first arrow to appear
    </span>
  )

  return <span>{content}</span>
}
