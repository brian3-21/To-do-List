"use client"
import Button from '../components/ui/Button';
import { useRef, useState, KeyboardEvent } from 'react';

export default function Counter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const [accumulatedValue, setAccumulatedValue] = useState<number>(0);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const inputValue = Number(inputRef.current?.value) || 0;
      setAccumulatedValue(inputValue);
    }
  };

  function increment() {
    if(accumulatedValue == 0){
    }
    setCount(count + accumulatedValue);
  };
  const decrement = () => setCount((prev) => prev - accumulatedValue);
  const reset = () => {
    setCount(0);
    setAccumulatedValue(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-6">
        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contador 
        </h1>

        {/* Display del contador */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-inner">
          <span className="block text-5xl font-bold text-center text-indigo-600">
            {count}
          </span>
          <small className="block text-center text-gray-500 mt-2">
            Valor acumulado: {accumulatedValue}
          </small>
        </div>

        {/* Input */}
        {/* Input */}
        <input
          type="number"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          placeholder="Ingresa un número y presiona Enter"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition mb-6 text-gray-900 placeholder-gray-900" /* Añadido text-gray-900 */
        />

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button name="Incrementar" handleClick={increment} />
          <Button name="Decrementar" handleClick={decrement} />
          <Button name="Reiniciar"   handleClick={reset} />
        </div>
        
      </div>
    </div>
  );
}