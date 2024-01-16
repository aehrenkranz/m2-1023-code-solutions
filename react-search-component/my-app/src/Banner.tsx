type Props = {
  text: string;
};
export default function Banner({ text }: Props) {
  return <li className="list-element">{text}</li>;
}
