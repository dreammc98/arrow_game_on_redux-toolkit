import { StyledHeading } from "../../../UI/StyledHeading/StyledHeading"
import { StyledSpan } from "../../../UI/StyledSpan/StyledSpan"

export const Description = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <StyledHeading title="↑↓→← Arrow-game description" />

      <StyledSpan
        text="Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears."
      />
      <StyledSpan
        text=" After three consecutive successful hits - game won, after three errors -
lost."
      />
    </div>
  )
}
