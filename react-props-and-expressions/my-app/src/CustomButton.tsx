type props = {
  text: string;
  color: string;
};
export default function CustomButton({ text, color }: props) {
  return <button className={color}>{text}</button>;
}
