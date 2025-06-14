function test() {
  console.log('Aun no hace nada');
}

function Button({
  handleClick = test,
  name = 'test'
}: {
  handleClick?: () => void;
  name?: string;
}) {
  return (
    <button
      onClick={handleClick} 
      className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition transform hover:-translate-y-1 active:translate-y-0 shadow-md"
    >
      {name} 
    </button>
  );
}

export default Button