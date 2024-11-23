import s from "./styledHeading.module.css"

type Props = {
  title: string
}

export const StyledHeading = ({ title }: Props) => {
  return <h3 className={s.text}>{title}</h3>
}
