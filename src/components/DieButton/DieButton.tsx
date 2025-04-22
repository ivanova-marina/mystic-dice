interface DieButtonProps {
  label: string;
  onClick: () => void;
}

export function DieButton({ label, onClick }: DieButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
      {label}
    </button>
  );
}
