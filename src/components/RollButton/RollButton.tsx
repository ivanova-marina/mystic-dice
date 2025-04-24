export function RollButton() {
  return (
    <button
      onClick={() => console.log('Roll the dice!')}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
      Roll!
    </button>
  );
}
