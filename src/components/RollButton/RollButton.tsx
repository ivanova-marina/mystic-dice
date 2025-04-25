interface RollButtonProps {
  onRoll: () => void;
}

export function RollButton({ onRoll }: RollButtonProps) {
  return (
    <button
      onClick={onRoll}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer w-48">
      Roll!
    </button>
  );
}
