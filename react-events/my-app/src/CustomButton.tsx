export default function CustomButton({ text, color, onCustomClick }) {
  return (
    <button
      onClick={() => onCustomClick(`You clicked ${color} ${text}`)}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
