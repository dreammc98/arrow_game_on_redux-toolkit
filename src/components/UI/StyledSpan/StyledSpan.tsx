import s from "./styledSpan.module.css"

type Props = {
  text: string
}

export const StyledSpan = ({ text }: Props) => {
  return <span className={s.text}>{text}</span>
}
