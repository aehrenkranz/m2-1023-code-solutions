export default function HotButton({
  onCustomClick,
  currentClass,
}: {
  onCustomClick: () => void;
  currentClass: string;
}) {
  return (
    <button className={currentClass} onClick={onCustomClick}>
      Hot Button
    </button>
  );
}
